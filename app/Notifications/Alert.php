<?php

namespace App\Notifications;

use App\Enums\FlashMessageType;
use App\Enums\NotificationType;

/**
 * Handles the creation and storage of alert messages
 * to be displayed as flash notifications.
 *
 * This class provides methods to set different types
 * of alert messages, such as success or error, and stores
 * them in the session for the next HTTP request.
 *
 * @method void success(string $message) Sets a success message in the session.
 * @method void error(string $message)   Sets an error message in the session.
 * @method void info(string $message)    Sets an info message in the session.
 * @method void warning(string $message) Sets a warning message in the session.
 */
class Alert
{

    /**
     * Stores a success flash message in the session.
     *
     * @param string $message The success message to be displayed.
     * @return void
     *
     * @example
     *   session()->alert()->success('Operation completed successfully.');
     *
     * This method sets the 'alert' session key with a message
     * and type 'success', which can be retrieved and displayed
     * on the next page load.
     */
    public function success(string $message)
    {
        session()->flash("alert", [
            "type" => FlashMessageType::Success,
            "message" => $message
        ]);
    }

    /**
     * Stores an error flash message in the session.
     *
     * @param string $message The error message to be displayed.
     * @return void
     *
     * @example
     *   session()->alert()->error('An error occurred.');
     *
     * This method sets the 'alert' session key with a message
     * and type 'error', which can be used to notify users
     * of issues during operations.
     */
    public function error(string $message): void
    {
        session()->flash('alert', [
            'type' => FlashMessageType::Error,
            'message' => $message,
        ]);
    }

    /**
     * Stores an informational flash message in the session.
     *
     * @param string $message The informational message to be displayed.
     * @return void
     *
     * @example
     *   session()->alert()->info('Processing your request...');
     *
     * This method sets the 'alert' session key with a message
     * and type 'info', commonly used to provide non-critical
     * information to the user.
     */
    public function info(string $message): void
    {
        session()->flash('alert', [
            'type' => FlashMessageType::Info,
            'message' => $message,
        ]);
    }

    /**
     * Stores a warning flash message in the session.
     *
     * @param string $message The warning message to be displayed.
     * @return void
     *
     * @example
     *   session()->alert()->warning('Please check your input.');
     *
     * This method sets the 'alert' session key with a message
     * and type 'warning', notifying users of potential issues.
     */
    public function warning(string $message): void
    {
        session()->flash('alert', [
            'type' => FlashMessageType::Warning,
            'message' => $message,
        ]);
    }
}
