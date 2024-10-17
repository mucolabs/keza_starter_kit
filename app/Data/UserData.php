<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class UserData extends Data
{
  public function __construct(
    public string $name,
    public string $email
  ) {}
}
