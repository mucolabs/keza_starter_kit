<?php

namespace App\Providers;

use App\Enums\NotificationType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\ServiceProvider;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        RedirectResponse::macro("flash", function (NotificationType $type, string $message) {
            session()->flash("notification", ["type" => $type, "message" => $message]);

            /** @var RedirectResponse $this */
            return $this;
        });

        /**
         * Sets a successful flash message
         * @param string $message - The success message to be displayed
         *
         * @return void
         */
        RedirectResponse::macro('success', function (string $message) {
            /** @var RedirectResponse $this */
            return $this->flash(NotificationType::Success, $message);
        });


        /**
         * Sets an informational flash message
         * @param string $message - The informational message to be displayed
         *
         * @return void
         */
        RedirectResponse::macro('info', function (string $message) {
            /** @var RedirectResponse $this */
            return $this->flash(NotificationType::Info, $message);
        });

        RedirectResponse::macro('warning', function (string $message) {
            /** @var RedirectResponse $this */
            return $this->flash(NotificationType::Warning, $message);
        });

        /**
         * Sets an error flash message
         * @param string $message - The error message to be displayed
         *
         * @return void
         */
        RedirectResponse::macro('error', function (string $message) {
            /** @var RedirectResponse $this */
            return $this->flash(NotificationType::Error, $message);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
