<?php

namespace App\Enums;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
enum FlashMessageType: string
{
    case Success  = "success";
    case Info = "info";
    case Error = "error";
    case Warning = "warning";
}
