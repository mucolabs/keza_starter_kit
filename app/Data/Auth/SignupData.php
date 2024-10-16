<?php

namespace App\Data\Auth;

use App\Models\User;
use Spatie\LaravelData\Data;
use Illuminate\Validation\Rules;

class SignupData extends Data
{
    public function __construct(
        public string $name,
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
            'name' => 'max:255',
            'email' => 'lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }
}
