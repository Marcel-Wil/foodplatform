<?php

use App\Models\FoodItem;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('home');

Route::get('/faq', function () {
    return Inertia::render('faq');
})->name('faq');

Route::get('/menu', function () {
    return Inertia::render('menu', [
        'foodItems' => FoodItem::foodItemsWithMedia(),
    ]);
})->name('menu');



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';