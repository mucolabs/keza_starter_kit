<?php

declare(strict_types=1);

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Configure commands
        DB::prohibitDestructiveCommands(app()->isProduction());

        // Configure models
        Model::shouldBeStrict(! app()->isProduction());
        Model::unguard();

        // force https
        if (app()->isProduction()) {
            URL::forceScheme('https');
        }
        // Configure Password Validation rule
        Password::defaults(function () {
            return app()->isProduction() ? Password::min(8)->uncompromised() : null;
        });
        // Configure dates
        Date::use(CarbonImmutable::class);
    }
}
