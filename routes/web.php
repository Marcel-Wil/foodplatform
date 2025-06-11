<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Models\Cart;
use App\Models\FaqCategory;
use App\Models\FoodItem;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('home');

Route::get('/faq', function () {
    return Inertia::render('faq', [
        'faqs' => FaqCategory::with('faqs')->get(),
    ]);
})->name('faq');

Route::get('/menu', function () {
    return Inertia::render('menu', [
        'foodItems' => FoodItem::foodItemsWithMedia(),
    ]);
})->name('menu');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/privacy-policy', function () {
    return Inertia::render('privacy');
})->name('privacy');

Route::middleware(['verified', 'auth'])->group(function () {
    Route::get('/summary', function () {
        return Inertia::render('summary', [
            'cartItems' => Cart::getUserCartItems(),
        ]);
    })->name('summary');

    Route::get('/order', function () {
        return Inertia::render('order', [
            'cartItems' => Cart::getUserCartItems(),
        ]);
    })->name('order');

    Route::post('/cart', [CartController::class, 'addProduct']);
    Route::post('/cartSummary', [CartController::class, 'addProductFromSummary']);
    Route::patch('/cartSummary', [CartController::class, 'deleteFromCart']);
    Route::post('/order', [OrderController::class, 'order']);
    Route::get('/payment/success', [PaymentController::class, 'success'])->name('payment.success');
    Route::get('/payment/cancel', [PaymentController::class, 'cancel'])->name('payment.cancel');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
