<?php

namespace App\Pages;

use Spatie\LaravelData\Data;

class LoginCreatePage extends Data
{
    public function __construct(
        public bool $canResetPassword,
        public ?string $status,
    ) {}
}
