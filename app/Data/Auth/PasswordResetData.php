<?php

namespace App\Data\Auth;

use Spatie\LaravelData\Data;
use Illuminate\Validation\Rules;

class PasswordResetData extends Data
{
    public function __construct(
        public string $token,
        public string $email,
        public string $password,
        public string $password_confirmation
    ) {}

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, Rules\Password|null|string>|string>
     */
    public static function rules(): array
    {
        return [
            'email' => 'email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }
}
