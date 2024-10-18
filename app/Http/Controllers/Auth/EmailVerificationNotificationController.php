<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\User;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        $user = type($request->user())->as(User::class);

        if ($user->hasVerifiedEmail()) {
            return redirect()->intended(route('dashboard', absolute: false));
        }

        $user->sendEmailVerificationNotification();

        // return back()->with('status', 'verification-link-sent');
        session()
            ->alert()
            ->success("A new verification link has been sent to the email address you provided during registration.");
        return back();
    }
}
