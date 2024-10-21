<?php

use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\URL;

use function Pest\Laravel\actingAs;

it('can render the email verification screen', function () {
    $user = type(User::factory()->unverified()->create())->as(User::class);

    actingAs($user)
        ->get(route("verification.notice"))
        ->assertOk();
});

it('can verify email', function () {
    $user = type(User::factory()->unverified()->create())->as(User::class);

    Event::fake();

    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1($user->email)]
    );

    actingAs($user)
        ->get($verificationUrl)
        ->assertRedirect(route('dashboard', absolute: false) . '?verified=1');

    Event::assertDispatched(Verified::class);
    expect($user->fresh()->hasVerifiedEmail())->toBeTrue();
});

it('cannot verify an email with an invalid hash', function () {
    $user = type(User::factory()->unverified()->create())->as(User::class);

    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1('wrong-email')]
    );

    $this->actingAs($user)->get($verificationUrl);

    expect($user->fresh()->hasVerifiedEmail())->toBeFalse();
});
