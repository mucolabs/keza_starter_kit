<?php

use App\Models\User;

use function Pest\Laravel\actingAs;

it('can render the confirm password screen', function () {
    $user = User::factory()->create();

    actingAs($user)
        ->get(route("password.confirm"))
        ->assertOk();
});

it('can confirm the password', function () {
    $user = User::factory()->create();

    actingAs($user)
        ->post(route("password.confirm"), ['password' => 'password'])
        ->assertRedirect()
        ->assertSessionHasNoErrors();
});

it('cannot confirm an invalid password', function () {
    $user = User::factory()->create();

    actingAs($user)
        ->post(route("password.confirm"), ['password' => 'wrong-password'])
        ->assertSessionHasErrors();
});
