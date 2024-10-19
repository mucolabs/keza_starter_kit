<?php

namespace App\Data;

use App\Models\User;
use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;

class ProfileData extends Data
{
    public function __construct(
        public string $name,
        public string $email,
    ) {}
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, \Illuminate\Validation\Rules\Unique|string>>
     */
    public static function rules(): array
    {
        $user = type(auth()->guard("web")->user())->as(User::class);
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($user->id),
            ],
        ];
    }
}
