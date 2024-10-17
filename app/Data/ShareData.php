<?php

namespace App\Data;

use App\Notifications\Toast;
use Closure;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

class ShareData extends Data
{
    public function __construct(
        #[TypeScriptType(UserData::class)]
        public ?Closure $user = null,
        public ?ToastData $toast = null,
        public ?AlertData $alert = null,
    ) {
        $this->shareAlert();
        $this->shareToastNotification();
    }

    protected function shareToastNotification(): void
    {
        if (session("toast")) {
            $this->toast = new ToastData(
                ...type(session("toast"))->asArray()
            );
        }
    }

    public function shareAlert(): void
    {
        if (session("alert")) {
            /**
             * We are using ToastData here
             * because they're basically the same
             */
            $this->alert = new AlertData(
                ...type(session("alert"))->asArray()
            );
        }
    }
}
