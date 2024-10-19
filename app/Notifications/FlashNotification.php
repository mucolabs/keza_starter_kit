<?php

namespace App\Notifications;

use App\Enums\FlashKey;
use App\Enums\FlashMessageType;
use Illuminate\Http\RedirectResponse;

/**
 * Handles the creation and storage of flash messages
 * to be displayed as flash notifications.
 * This class provides methods to set different types
 * of flash messages, such as success or error, and stores
 * them in the session for the next HTTP request.
 *
 * @method  \Illuminate\Http\RedirectResponse success(string $message) Sets a success message in the session.
 * @method  \Illuminate\Http\RedirectResponse error(string $message)   Sets an error message in the session.
 * @method  \Illuminate\Http\RedirectResponse info(string $message)    Sets an info message in the session.
 * @method  \Illuminate\Http\RedirectResponse warning(string $message) Sets a warning message in the session.
 */
class FlashNotification
{
    public function __construct(
        protected FlashKey $key,
        /** @var \Illuminate\Http\RedirectResponse $response */
        protected RedirectResponse $response,
    ) {}

    /**
     * Stores a success flash message in the session.
     * This method sets the 'toast' session key with a message
     * and type 'success', which can be retrieved and displayed
     * on the next page load.
     *
     * @param string $message The success message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function success(string $message)
    {
        return $this->response->with($this->key->value, [
            "type" => FlashMessageType::Success,
            "message" => $message
        ]);
    }

    /**
     * Stores an error flash message in the session.
     * This method sets the 'toast' session key with a message
     * and type 'error', which can be used to notify users
     * of issues during operations.
     *
     * @param string $message The error message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function error(string $message): RedirectResponse
    {
        return $this->response->with($this->key->value, [
            "type" => FlashMessageType::Error,
            "message" => $message
        ]);
    }

    /**
     * Stores an informational flash message in the session.
     * This method sets the 'toast' session key with a message
     * and type 'info', commonly used to provide non-critical
     * information to the user.
     *
     * @param string $message The informational message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function info(string $message): RedirectResponse
    {
        return $this->response->with($this->key->value, [
            "type" => FlashMessageType::Info,
            "message" => $message
        ]);
    }

    /**
     * Stores a warning flash message in the session.
     * This method sets the 'toast' session key with a message
     * and type 'warning', notifying users of potential issues.
     *
     * @param string $message The warning message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function warning(string $message): RedirectResponse
    {
        return $this->response->with($this->key->value, [
            "type" => FlashMessageType::Warning,
            "message" => $message
        ]);
    }
}
