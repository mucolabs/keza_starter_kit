<?php

namespace App\Http\Controllers\Auth;

use App\Data\Auth\LoginData;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\DraftLoginRequest;
use App\Pages\LoginCreatePage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Inertia\ResponseFactory;

class LoginController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): ResponseFactory|Response
    {
        return inertia("auth/login", LoginCreatePage::from([
            "canResetPassword" => Route::has("password.request"),
            "status" => session("session")
        ]));
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginData $data): RedirectResponse
    {
        $data->request = request();
        $data->authenticate();
        request()->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        auth()->guard("web")->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
