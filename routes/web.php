<?php

declare(strict_types=1);

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;



Route::get("/", function () {
    return inertia("welcome/page");
})->name("welcome");

Route::get('/dashboard', function () {
    return inertia("dashboard/index");
})->middleware(['auth', "verified"])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/user/profile', [ProfileController::class, 'edit'])->name('user.profile');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get("/user/settings", function () {
        return inertia("user/settings");
    })->name("user.settings");
});

require __DIR__ . '/auth.php';
