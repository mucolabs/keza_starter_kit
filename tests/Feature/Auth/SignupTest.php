<?php

use function Pest\Laravel\assertAuthenticated;
use function Pest\Laravel\get;
use function Pest\Laravel\post;

it('can render the signup screen', function () {
    get(route("register"))->assertOk();
});

it('can register new users', function () {
    post(route("register"), [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ])->assertRedirect(route("dashboard", absolute: false));

    assertAuthenticated();
});
