<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\PasswordData;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(PasswordData $data): RedirectResponse
    {
        if (Auth::user()) {
            Auth::user()->update([
                'password' => Hash::make($data->password),
            ]);
            return back()->toast()->success("Password has been updated");
        }

        return redirect()->route("login")->alert()->error("Please log in to update your password.");
    }
}
