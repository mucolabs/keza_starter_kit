<?php

use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertAuthenticated;
use function Pest\Laravel\assertGuest;
use function Pest\Laravel\get;
use function Pest\Laravel\post;

it('can render the login screen', function () {
    get(route("login"))->assertOk();
});

it('can authenticate users using the login screen', function () {
    $user = User::factory()->create();

    post(route("login"), [
        'email' => $user->email,
        'password' => 'password',
    ])->assertRedirect(route("dashboard", absolute: false));

    assertAuthenticated();
});

it('can not authenticate users  with invalid password', function () {
    $user = User::factory()->create();

    post(route("login"), [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    assertGuest();
});

it('can logout users', function () {
    $user = User::factory()->create();

    actingAs($user)
        ->post(route("logout"))
        ->assertRedirect(route("login"));

    assertGuest();
});
