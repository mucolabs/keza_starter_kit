<?php

namespace App\Data\Auth;

use Spatie\LaravelData\Data;

class PasswordResetLinkData extends Data
{
    public function __construct(
        public string $email,
    ) {}

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, string>>
     */
    public static function rules(): array
    {
        return [
            'email' => ['email'],
        ];
    }
}
