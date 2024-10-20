#!/usr/bin/env bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "Caching config..."
/usr/bin/php /var/www/html/artisan config:cache --no-ansi -q

echo "Caching routes..."
/usr/bin/php /var/www/html/artisan route:cache --no-ansi -q

echo "Caching views..."
/usr/bin/php /var/www/html/artisan view:cache --no-ansi -q

echo "Running database migrations..."
/usr/bin/php /var/www/html/artisan migrate --force --no-ansi -q

echo "Deployment script completed successfully."
