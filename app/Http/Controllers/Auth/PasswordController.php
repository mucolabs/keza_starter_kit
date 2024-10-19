<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\PasswordData;
use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

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
