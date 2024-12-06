# syntax = docker/dockerfile:experimental

ARG PHP_VERSION=8.4
ARG NODE_VERSION=22.12
FROM ubuntu:22.04 as base
LABEL fly_launch_runtime="laravel"

# Re-define PHP_VERSION after FROM
ARG PHP_VERSION
ENV DEBIAN_FRONTEND=noninteractive \
    COMPOSER_ALLOW_SUPERUSER=1 \
    COMPOSER_HOME=/composer \
    COMPOSER_MAX_PARALLEL_HTTP=24 \
    PHP_PM_MAX_CHILDREN=10 \
    PHP_PM_START_SERVERS=3 \
    PHP_MIN_SPARE_SERVERS=2 \
    PHP_MAX_SPARE_SERVERS=4 \
    PHP_DATE_TIMEZONE=UTC \
    PHP_DISPLAY_ERRORS=Off \
    PHP_ERROR_REPORTING=22527 \
    PHP_MEMORY_LIMIT=256M \
    PHP_MAX_EXECUTION_TIME=90 \
    PHP_POST_MAX_SIZE=100M \
    PHP_UPLOAD_MAX_FILE_SIZE=100M \
    PHP_ALLOW_URL_FOPEN=Off

# Prepare base container:
# 1. Install PHP, Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY .fly/php/ondrej_ubuntu_php.gpg /etc/apt/trusted.gpg.d/ondrej_ubuntu_php.gpg
ADD .fly/php/packages/${PHP_VERSION}.txt /tmp/php-packages.txt

RUN apt-get update \
    && apt-get install -y --no-install-recommends gnupg2 ca-certificates git-core curl zip unzip rsync vim-tiny htop sqlite3 nginx supervisor cron \
    && ln -sf /usr/bin/vim.tiny /etc/alternatives/vim \
    && ln -sf /etc/alternatives/vim /usr/bin/vim \
    && echo "deb http://ppa.launchpad.net/ondrej/php/ubuntu jammy main" > /etc/apt/sources.list.d/ondrej-ubuntu-php.list \
    && apt-get update \
    && apt-get -y --no-install-recommends install $(cat /tmp/php-packages.txt) \
    && ln -sf /usr/sbin/php-fpm${PHP_VERSION} /usr/sbin/php-fpm \
    && mkdir -p /var/www/html/public && echo "index" > /var/www/html/public/index.php \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# 2. Copy config files
COPY .fly/nginx/ /etc/nginx/
COPY .fly/fpm/ /etc/php/${PHP_VERSION}/fpm/
COPY .fly/supervisor/ /etc/supervisor/
COPY .fly/entrypoint.sh /entrypoint
COPY .fly/start-nginx.sh /usr/local/bin/start-nginx
RUN chmod 754 /usr/local/bin/start-nginx

# 3. Copy application code
COPY . /var/www/html
WORKDIR /var/www/html

# 4. Setup application dependencies
RUN composer install --optimize-autoloader --no-dev \
    && mkdir -p storage/logs \
    && php artisan optimize:clear \
    && chown -R www-data:www-data /var/www/html \
    && echo "MAILTO=\"\"\n* * * * * www-data /usr/bin/php /var/www/html/artisan schedule:run" > /etc/cron.d/laravel \
    && sed -i='' '/->withMiddleware(function (Middleware \$middleware) {/a\
        $middleware->trustProxies(at: "*");\
    ' bootstrap/app.php; \
    if [ -d .fly ]; then cp .fly/entrypoint.sh /entrypoint; chmod +x /entrypoint; fi;

RUN rm -rf /etc/supervisor/conf.d/fpm.conf; \
    mv /etc/supervisor/octane-swoole.conf /etc/supervisor/conf.d/octane-swoole.conf; \
    rm /etc/nginx/sites-enabled/default; \
    ln -sf /etc/nginx/sites-available/default-octane /etc/nginx/sites-enabled/default;


##############################################
# Multi-stage build: Use Bun for JS packages #
##############################################
FROM oven/bun:latest as bun_build

WORKDIR /app
COPY . .
COPY --from=base /var/www/html/vendor /app/vendor

# If vite.config.js exists, we run `bun run build`.
# If not, we run `bun run production`.
# We assume package.json scripts contain "build" or "production".
RUN bun install --no-cache
RUN if [ -f "vite.config.ts" ]; then \
      bun run build; \
    else \
      bun run production; \
    fi;


#################################
# Final Image with Node.js only #
#################################
FROM base

# Install Node.js 22.x
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Copy built assets from bun_build stage
COPY --from=bun_build /app/public /var/www/html/public-bun
RUN rsync -ar /var/www/html/public-bun/ /var/www/html/public/ \
    && rm -rf /var/www/html/public-bun \
    && chown -R www-data:www-data /var/www/html/public

EXPOSE 8080
ENTRYPOINT ["/entrypoint"]
