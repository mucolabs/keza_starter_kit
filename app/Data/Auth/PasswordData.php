<?php

namespace App\Data\Auth;

use Spatie\LaravelData\Data;
use Illuminate\Validation\Rules;

class PasswordData extends Data
{
    public function __construct(
        public string $current_password,
        public string $password,
        public string $password_confirmation
    ) {}

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, Rules\Password|null|string>>
     */
    public static function rules(): array
    {
        return [
            'current_password' => ['current_password'],
            'password' => [Rules\Password::defaults(), 'confirmed'],
        ];
    }
}
