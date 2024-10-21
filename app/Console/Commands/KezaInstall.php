<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

use function Laravel\Prompts\confirm;
use function Laravel\Prompts\warning;

class KezaInstall extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'keza:install {name?: The project name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run the Keza installation process';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        app()->detectEnvironment(function () {
            return 'local';
        });

        info('Starting Keza Starter Kit installation...');

        // Run npm install
        if (! File::exists('node_modules')) {
            info('Running npm install...');
            exec('npm install');
        } else {
            warning('Node modules already exist. Skipping npm install.');
        }

        $this->setupEnvFile();
        $this->reloadEnvironment();
        $this->generateAppKey();
        $this->runMigrations();

        $this->cleanup();

        info('Keza Starter Kit installation completed successfully!');
        info('👉 Run `composer run dev` to start the local server.');
        info('Keep creating. 🫡');
    }

    private function setupEnvFile(): void
    {
        info('Setting up .env file...');
        if (! File::exists('.env')) {
            File::copy('.env.example', '.env');
            info('.env file created successfully.');
        } else {
            warning('.env file already exists. Skipping creation.');
        }
    }

    private function reloadEnvironment(): void
    {
        $app = app();
        $app->bootstrapWith([
            \Illuminate\Foundation\Bootstrap\LoadEnvironmentVariables::class,
        ]);
    }

    private function generateAppKey(): void
    {
        info('Checking application key...');
        if (empty(env('APP_KEY'))) {
            $this->call('key:generate');
        } else {
            warning('Application key already exists. Skipping.');
        }
    }

    private function runMigrations(): void
    {
        if (confirm('Do you want to run database migrations?', true)) {
            info('Running database migrations...');
            $this->call('migrate', [
                '--force' => true, // This will bypass the production check
            ]);
        }
    }

    private function cleanup(): void
    {
        if (confirm('Do you want to remove the installation files?', true)) {
            info('Removing installation files...');

            // Remove the entire Commands folder
            File::deleteDirectory(app_path('Console'));

            // Remove the install.sh script
            File::delete(base_path('install.sh'));

            info('Installation files removed.');
        } else {
            info('Installation files kept. You can manually remove them later if needed.');
        }
    }
}
