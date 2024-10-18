<?php

namespace App\Pages;

use Spatie\LaravelData\Data;

class PasswordResetCreatePage extends Data
{
    public function __construct(
        public string $email,
        public string $token,
    ) {}
}
