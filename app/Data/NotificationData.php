<?php

namespace App\Data;

use App\Enums\NotificationType;

class NotificationData
{
    public function __construct(
        public NotificationType $type,
        public string $message
    ) {}
}
