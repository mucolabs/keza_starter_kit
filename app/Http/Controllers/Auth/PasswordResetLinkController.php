<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\PasswordResetLinkData;
use App\Http\Controllers\Controller;
use App\Pages\PasswordResetLinkCreatePage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Password;
use Inertia\{Response, ResponseFactory};

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response | ResponseFactory
    {
        return inertia('auth/password/forgot', PasswordResetLinkCreatePage::from([
            'status' => session('status'),
        ]));
    }

    /**
     * Handle an incoming password reset link request.
     *
    //  * @throws \Illuminate\Validation\ValidationException
     */
    public function store(PasswordResetLinkData $data): RedirectResponse
    {
        /**
         * We will send the password reset link to this user. Once we have attempted
         * to send the link, we will examine the response then see the message we
         * need to show to the user. Finally, we'll send out a proper response.
         */
        $status = Password::sendResetLink(
            $data->toArray()
        );

        if ($status == Password::RESET_LINK_SENT) {
            return back()
                ->alert()
                ->success(__($status));
        }

        return back()
            ->alert()
            ->error(trans($status));
    }
}
