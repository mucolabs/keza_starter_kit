<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use function Pest\Laravel\actingAs;
use function PHPUnit\Framework\assertTrue;

it('can update the password', function () {
    $user = User::factory()->create();

    $response = actingAs(type($user)->as(User::class))
        ->from(route("user.settings"))
        ->put('/password', [
            'current_password' => 'password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ])
        ->assertSessionHasNoErrors()
        ->assertRedirect(route("user.settings"));

    assertTrue(Hash::check('new-password', $user->refresh()->password));
});

it('must be a correct password to be updated', function () {
    $user = User::factory()->create();

    actingAs(type($user)->as(User::class))
        ->from(route("user.settings"))
        ->put('/password', [
            'current_password' => 'wrong-password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ])
        ->assertSessionHasErrors('current_password')
        ->assertRedirect(route("user.settings"));
});
