<?php

namespace App\Enums;

use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
enum FlashKey: string
{
    case Alert  = "alert";
    case Toast = "toast";
}
