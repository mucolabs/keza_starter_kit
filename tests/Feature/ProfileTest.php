<?php

use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertGuest;
use function PHPUnit\Framework\assertNotNull;
use function PHPUnit\Framework\assertNull;
use function PHPUnit\Framework\assertSame;

it('can display the profile page', function () {
    $user = User::factory()->create();

    actingAs(type($user)->as(User::class))
        ->get(route("user.profile"))
        ->assertOk();
});

it('can update the profile information', function () {
    $user = User::factory()->create();

    actingAs(type($user)->as(User::class))
        ->from(route("user.profile"))
        ->patch(route("profile.update"), [
            'name' => 'Test User',
            'email' => 'test@example.com',
        ])
        ->assertSessionHasNoErrors()
        ->assertRedirect(route("user.profile"));

    $user->refresh();

    assertSame('Test User', $user->name);
    assertSame('test@example.com', $user->email);
    assertNull($user->email_verified_at);
});

it('does not change the email verification status if the email address remains the same', function () {
    $user = User::factory()->create();

    actingAs(type($user)->as(User::class))
        ->from(route("user.profile"))
        ->patch(route("profile.update"), [
            'name' => 'Test User',
            'email' => $user->email,
        ])
        ->assertSessionHasNoErrors()
        ->assertRedirect(route("user.profile"));

    assertNotNull($user->refresh()->email_verified_at);
});

it('can delete a user-owned account', function () {
    $user = User::factory()->create();

    actingAs(type($user)->as(User::class))
        ->delete(route("profile.destroy"), [
            'password' => 'password',
        ])
        ->assertSessionHasNoErrors()
        ->assertRedirect(route("welcome"));

    assertGuest();
    assertNull($user->fresh());
});

it('must provide the correct password to delete account', function () {
    $user = User::factory()->create();

    actingAs(type($user)->as(User::class))
        ->from(route("user.settings"))
        ->delete(route("profile.destroy"), [
            'password' => 'wrong-password',
        ])
        ->assertSessionHasErrors('password')
        ->assertRedirect(route("user.settings"));

    assertNotNull($user->fresh());
});
