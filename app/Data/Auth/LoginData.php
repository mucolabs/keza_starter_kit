<?php

namespace App\Data\Auth;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Spatie\LaravelData\Data;

class LoginData extends Data
{
    public function __construct(
        public string $email,
        public string $password,
        public bool $remember = false,
        public ?Request $request = null
    ) {}



    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, string>>
     */
    public static function rules(): array
    {
        return [
            "email" => ["email"]
        ];
    }
    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        $data = ["email" => $this->email, "password" => $this->password];

        if (! Auth::attempt($data, $this->remember)) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->throttleKey());
    }

    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        $request = type($this->request)->as(Request::class);
        event(new Lockout($request));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            "email" => trans("auth.throttle", [
                "seconds" => $seconds,
                "minutes" => ceil($seconds / 60)
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     * @return string
     */
    public function throttleKey(): string
    {
        $request = type($this->request)->as(Request::class);
        return Str::transliterate(Str::lower($this->email) . '|' . $request->ip());
    }
}
