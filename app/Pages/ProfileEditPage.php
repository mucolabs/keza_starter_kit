<?php

namespace App\Pages;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Spatie\LaravelData\Data;

class ProfileEditPage extends Data
{
    public function __construct(
        public  bool $mustVerifyEmail,
    ) {}
}
