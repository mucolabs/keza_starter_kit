<h1 align="center">
  Keza Starter Kit
</h1>

<div align="center">
  <p>
A minimalist, beautiful, and production-ready starter kit
  </p>
</div>

<div align="center">
  <p>
    <a href="https://keza-starter-kit.fly.dev" target="_blank">Live Demo</a>
    ·
    <a href="https://x.com/mucotreso" target="_blank">Twitter</a>

  </p>
</div>

> We've created a simple demo showcasing all the features this starter kit offers. Click the button below to explore it.
> Note that the app is deployed on a small server with limited resources, so it may run slowly. It also periodically clears all data to conserve storage space.

## [Live Demo](https://keza.tmuco.dev)

[![Keza Starter Kit](https://github.com/mucolabs/keza_starter_kit/blob/main/public/welcome_page.png)](https://keza.tmuco.dev)

## What's in the Starter Kit

> [!IMPORTANT]
> Note that this is an opinionated starter kit with features tailored to my current needs, and it will continue to evolve as the project progresses. Pull requests are welcome for new features and improvements, especially since this project was built while I was learning and exploring the PHP and Laravel ecosystems.

Here’s the list of features included in the Keza starter kit:

- [**Laravel Breeze**](https://laravel.com/docs/11.x/starter-kits#breeze-and-inertia): A minimal, straightforward implementation of all Laravel's authentication features.
- [**Inertia with React**](https://inertiajs.com/): A modern approach to building classic server-driven web applications.
- [**Mantine**](https://mantine.dev/): A fully-featured React component library.
- Styling with [**Tailwind**](https://tailwindcss.com/).
- Testing with [**Pest**](https://pestphp.com/).
- End-to-End Types with [**Laravel Data**](https://spatie.be/docs/laravel-data/v4/introduction).
- Code Formatting with [**Prettier**](https://prettier.io/) and [**Pint**](https://laravel.com/docs/11.x/pint).
- Linting with [**ESLint**](https://eslint.org/).
- Static types with [**TypeScript**](https://www.typescriptlang.org/) and static analysis with [**PHPStan**](https://phpstan.org/).
- Typed Route Inference on the Frontend
- Production-Ready [**SQLite**](https://www.sqlite.org) Database.
- [**Fly app deployment**](https://fly.io/) with [**Docker**](https://www.docker.com/)
- [**GitHub Actions**](https://github.com/features/actions) for deploy on merge to production and staging environments

## Local Installation Guide

Before you begin, ensure your system meets the following requirements:

- **PHP 8.x** or higher
- **Composer** (latest version)
- **Node.js 20** or higher
- **SQLite** (used as the database)

You can streamline the setup process by running the install script:

```bash
./install.sh
```

Alternatively, follow these steps manually:

```bash
# Clone the repository and navigate into the project directory
git clone git@github.com:mucolabs/keza_starter_kit.git
cd keza_starter_kit

# Copy the example environment file
cp .env.example .env
```

> [!NOTE]
>
> - The `.env` file holds sensitive configurations like app keys.
> - Ensure `DB_CONNECTION=sqlite` is set, and the path to your SQLite database file (e.g., `database/database.sqlite`) is correctly configured.
> - Modify other environment variables as needed.

```bash
# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install

# Generate the application key for secure encryption
php artisan key:generate

# Run database migrations to set up the required tables
php artisan migrate

# Start the development server and Access the application by visiting: http://localhost:8000
composer run dev
```

## Support

If you found the Keza starter kit helpful, please consider supporting it with a star. Thank you!

## Acknowledgments

Special thanks to [Daniel Kanem](https://github.com/dev-xo) and [Josh Cirre](https://github.com/joshcirre) for inspiring this project.

## License

The Keza starter kit is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT). You are free to use the code for inspiration, though crediting the author is appreciated.
