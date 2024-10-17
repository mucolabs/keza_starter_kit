<?php

namespace App\Providers;

use App\Enums\FlashMessageType;
use App\Enums\NotificationType;
use App\Notifications\Alert;
use App\Notifications\Toast;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class InertiaServiceProvider extends ServiceProvider
{




    /**
     * Register services.
     */
    public function register(): void
    {


        /**
         * Registers the alert macro on the session.
         * @return \App\Notifications\Alert
         */
        Session::macro("alert", function (): Alert {
            return new Alert();
        });

        /**
         * Registers the toast macro on the session
         * @return \App\Notifications\Toast
         */
        RedirectResponse::macro("toast", function (): Toast {
            /** @var RedirectResponse $this */
            return new Toast($this);
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void {}
}
