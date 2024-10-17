<?php

namespace App\Notifications;

use App\Enums\FlashMessageType;
use Illuminate\Http\RedirectResponse;

/**
 * Handles the creation and storage of toast messages
 * to be displayed as flash notifications.
 *
 * This class provides methods to set different types
 * of toast messages, such as success or error, and stores
 * them in the session for the next HTTP request.
 *
 * @method  \Illuminate\Http\RedirectResponse success(string $message) Sets a success message in the session.
 * @method  \Illuminate\Http\RedirectResponse error(string $message)   Sets an error message in the session.
 * @method  \Illuminate\Http\RedirectResponse info(string $message)    Sets an info message in the session.
 * @method  \Illuminate\Http\RedirectResponse warning(string $message) Sets a warning message in the session.
 */
class Toast
{
    public function __construct(
        /** @var \Illuminate\Http\RedirectResponse $response */
        protected RedirectResponse $response,
    ) {}

    /**
     * Stores a success flash message in the session.
     *
     * @param string $message The success message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     *
     * @example
     *   session()->toast()->success('Operation completed successfully.');
     *
     * This method sets the 'toast' session key with a message
     * and type 'success', which can be retrieved and displayed
     * on the next page load.
     */
    public function success(string $message)
    {
        session()->flash("toast", [
            "type" => FlashMessageType::Success,
            "message" => $message
        ]);

        return $this->response;
    }

    /**
     * Stores an error flash message in the session.
     *
     * @param string $message The error message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     *
     * @example
     *   session()->toast()->error('An error occurred.');
     *
     * This method sets the 'toast' session key with a message
     * and type 'error', which can be used to notify users
     * of issues during operations.
     */
    public function error(string $message): RedirectResponse
    {
        session()->flash('toast', [
            'type' => FlashMessageType::Error,
            'message' => $message,
        ]);

        return $this->response;
    }

    /**
     * Stores an informational flash message in the session.
     *
     * @param string $message The informational message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     *
     * @example
     *   session()->toast()->info('Processing your request...');
     *
     * This method sets the 'toast' session key with a message
     * and type 'info', commonly used to provide non-critical
     * information to the user.
     */
    public function info(string $message): RedirectResponse
    {
        session()->flash('toast', [
            'type' => FlashMessageType::Info,
            'message' => $message,
        ]);


        return $this->response;
    }

    /**
     * Stores a warning flash message in the session.
     *
     * @param string $message The warning message to be displayed.
     * @return \Illuminate\Http\RedirectResponse
     *
     * @example
     *   session()->toast()->warning('Please check your input.');
     *
     * This method sets the 'toast' session key with a message
     * and type 'warning', notifying users of potential issues.
     */
    public function warning(string $message): RedirectResponse
    {
        session()->flash('toast', [
            'type' => FlashMessageType::Warning,
            'message' => $message,
        ]);

        return $this->response;
    }
}
