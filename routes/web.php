<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('home');

Route::get('/faq', function () {
    return Inertia::render('faq');
})->name('faq');


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';