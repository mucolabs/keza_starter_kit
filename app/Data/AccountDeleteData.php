<?php

namespace App\Data\Auth;

use Spatie\LaravelData\Data;
use Illuminate\Validation\Rules;

class AccountDeleteData extends Data
{
    public function __construct(
        public string $current_password,
    ) {}

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, Rules\Password|null|string>>
     */
    public static function rules(): array
    {
        return [
            'password' => ['current_password'],
        ];
    }
}
