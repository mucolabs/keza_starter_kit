<?php

use App\Models\User;

use function Pest\Laravel\actingAs;

it('can render the confirm password screen', function () {
    $user = type(User::factory()->create())->as(User::class);

    actingAs($user)
        ->get('/confirm-password')
        ->assertOk();
});

it('can confirm the password', function () {
    $user = type(User::factory()->create())->as(User::class);

    actingAs($user)
        ->post(route("password.confirm"), ['password' => 'password'])
        ->assertRedirect()
        ->assertSessionHasNoErrors();
});

it('cannot confirm an invalid password', function () {
    $user = type(User::factory()->create())->as(User::class);

    actingAs($user)
        ->post(route("password.confirm"), ['password' => 'wrong-password'])
        ->assertSessionHasErrors();
});
