<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Auth\LoginUser;
use App\Data\Auth\LoginData;
use App\Http\Controllers\Controller;
use App\Pages\LoginCreatePage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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
    public function store(LoginData $data, LoginUser $action): RedirectResponse
    {
        $result = $action->handle($data);

        request()->session()->regenerate();

        if (! $result["ok"]) {
            return back()
                ->alert()
                ->error($result["value"]);
        }


        return redirect()
            ->intended(route('dashboard', absolute: false))
            ->toast()
            ->success("Welcome back, {$result["value"]->name}!");
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        auth()->guard("web")->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()
            ->to(route("login"))
            ->toast()
            ->info("You have been signed out. See you next time!");
    }
}
