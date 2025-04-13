<?php

use App\Http\Controllers\CartController;
use App\Models\Faq;
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

Route::post('/cart', [CartController::class, 'addProduct']);




require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';