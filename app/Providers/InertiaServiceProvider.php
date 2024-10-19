<?php

namespace App\Providers;

use App\Enums\FlashKey;
use App\Notifications\FlashNotification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\ServiceProvider;

class InertiaServiceProvider extends ServiceProvider
{

    /**
     * Register services.
     */
    public function register(): void
    {
        /**
         * Registers the `alert` function on the RedirectResponse.
         *
         * This function sets an alert session with the specified type (success|error|info|warning)
         * and message as its data. On the frontend, it is intended to
         * communicate a state that affects a system, feature or page.
         *
         * @return \App\Notifications\FlashNotification
         */
        RedirectResponse::macro("alert", function (): FlashNotification {
            /** @var RedirectResponse $this */
            return new FlashNotification(FlashKey::Alert, $this);
        });

        /**
         * Registers the `toast` function on the RedirectResponse.
         *
         * This function sets a toast session with the specified type (success|error|info|warning)
         * and message as its data. On the frontend, it is intended to
         * display a temporary message to the user
         *
         * @return \App\Notifications\FlashNotification
         */
        RedirectResponse::macro("toast", function (): FlashNotification {
            /** @var RedirectResponse $this */
            return new FlashNotification(FlashKey::Toast, $this);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void {}
}
