<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\SignupData;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\{Response, ResponseFactory};

class SignupController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): ResponseFactory|Response
    {
        return inertia("auth/signup");
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(SignupData $data): RedirectResponse
    {
        $user = User::create([
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make($data->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        $appName = type(config("app.name", "Keza"))->asString();

        return redirect(route("dashboard", absolute: false))
            ->toast()
            ->success("Welcome to {$appName}, {$user->name}");
    }
}
