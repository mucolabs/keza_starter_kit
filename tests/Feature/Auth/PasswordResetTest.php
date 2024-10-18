<?php

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;

use function Pest\Laravel\get;
use function Pest\Laravel\post;

it('can render the reset password link screen', function () {
    get(route("password.request"))->assertOk();
});

it('can request the reset password link', function () {
    Notification::fake();

    $user = User::factory()->create();

    post(route("password.request"), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class);
});

it('can render the reset password screen', function () {
    Notification::fake();

    $user = User::factory()->create();

    post(route("password.request"), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        get(route("password.reset", ["token" => $notification->token]) . "?email={$user->email}")->assertOk();

        return true;
    });
});

it('can reset the password with valid token', function () {
    Notification::fake();

    $user = User::factory()->create();

    post(route("password.request"), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        post(route("password.store"), [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'password',
            'password_confirmation' => 'password',
        ])->assertSessionHasNoErrors()->assertRedirect(route("login"));

        return true;
    });
});
