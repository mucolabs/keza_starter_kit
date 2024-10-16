<?php

namespace App\Pages;

use Spatie\LaravelData\Data;

class PasswordResetLinkCreatePage extends Data
{
    public function __construct(
        public ?string $status,
    ) {}
}
