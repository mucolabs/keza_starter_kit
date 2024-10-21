<?php

namespace App\Http\Controllers;

use App\Data\ProfileData;
use App\Models\User;
use App\Pages\ProfileEditPage;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\{Response, ResponseFactory};

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response|ResponseFactory
    {
        return inertia('user/profile', ProfileEditPage::from([
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
        ]));
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileData $data): RedirectResponse
    {
        $user = type(Auth::user())->as(User::class);

        $user->fill($data->all());

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        return back()->toast()->success("Profile info has been updated");
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = type($request->user())->as(User::class);

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/')
            ->toast()
            ->info("Your account has been successfully deleted. We're sad to see you go!");
    }
}
