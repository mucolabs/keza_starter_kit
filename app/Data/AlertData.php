<?php

namespace App\Data;

use App\Enums\FlashMessageType;
use Spatie\LaravelData\Data;

class AlertData extends Data
{
    public function __construct(
        public FlashMessageType $type,
        public string $message
    ) {}
}