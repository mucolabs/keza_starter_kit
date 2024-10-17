<?php

namespace App\Actions\Auth;

use App\Data\Auth\LoginData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;

class LoginUser
{
    public function __construct(
        protected Request $request,
    ) {}

    /**
     * Login user
     * @param LoginData $data
     * @return array{ok: false, value: string}|array{ok: true, value: User} A result array indicating success or failure.
     */
    public function handle(LoginData $data): array
    {
        try {
            $this->authenticate($data);
            $user = User::where("email", $data->email)->firstOrFail();
            return ["ok" => true, "value" => $user];
        } catch (BadRequestException $e) {
            return ["ok" => false, "value" => $e->getMessage()];
        }
    }

    /**
     * Attempt to authenticate the request's credentials.
     */
    public function authenticate(LoginData $data): void
    {
        $this->ensureIsNotRateLimited($data->email);

        $input = [
            "email" => $data->email,
            "password" => $data->password
        ];

        if (! Auth::attempt($input, $data->remember)) {
            RateLimiter::hit($this->throttleKey($data->email));

            throw new BadRequestException(trans('auth.failed'));
        }

        RateLimiter::clear($this->throttleKey($data->email));
    }


    public function ensureIsNotRateLimited(string $email): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey($email), 5)) {
            return;
        }

        event(new Lockout($this->request));

        $seconds = RateLimiter::availableIn($this->throttleKey($email));

        throw new BadRequestException(trans("auth.throttle", [
            "seconds" => $seconds,
            "minutes" => ceil($seconds / 60)
        ]));
    }

    /**
     * Get the rate limiting throttle key for the request.
     * @return string
     */
    public function throttleKey(string $email): string
    {
        return Str::transliterate(Str::lower($email) . '|' . $this->request->ip());
    }
}
