<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\PasswordResetData;
use App\Http\Controllers\Controller;
use App\Pages\PasswordResetCreatePage;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\{Response, ResponseFactory};

class PasswordResetController extends Controller
{
    /**
     * Display the password reset view.
     */
    public function create(Request $request): Response | ResponseFactory
    {
        return inertia("auth/password/reset", PasswordResetCreatePage::from([
            "email" => $request->email,
            "token" => $request->route("token")
        ]));
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(PasswordResetData $data): RedirectResponse
    {
        /**
         * Here we will attempt to reset the user's password. If it is successful we
         * will update the password on an actual user model and persist it to the
         * database. Otherwise we will parse the error and return the response.
         */
        $status = Password::reset(
            $data->toArray(),
            function ($user) use ($data) {
                $user->forceFill([
                    'password' => Hash::make($data->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        $status = type($status)->asString();

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        if ($status == Password::PASSWORD_RESET) {
            return redirect()
                ->route("login")
                ->alert()
                ->success(__($status));
        }

        return back()
            ->alert()
            ->error(trans($status));
    }
}
