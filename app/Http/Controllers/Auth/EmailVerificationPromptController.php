<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\{Response, ResponseFactory};

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): RedirectResponse|Response|ResponseFactory
    {
        $user = type($request->user())->as(User::class);

        return $user->hasVerifiedEmail()
            ? redirect()->intended(route('dashboard', absolute: false))
            : inertia('auth/verify_email');
    }
}
