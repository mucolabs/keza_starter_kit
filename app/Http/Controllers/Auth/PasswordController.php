<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\PasswordData;
use App\Http\Controllers\Controller;
use App\Models\User;
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
        $user = type(request()->user())->as(User::class);

        $user->update([
            'password' => Hash::make($data->password),
        ]);

        return back();
    }
}
