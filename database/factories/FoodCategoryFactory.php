<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FoodCategory>
 */
class FoodCategoryFactory extends Factory
{
    public function definition(): array
    {
        // Define some category names
        $categoryName = fake()->randomElement([
            'Appetizers',
            'Main Course',
            'Desserts',
            'Beverages',
            'Salads',
            'Sides',
            'Pasta',
            'Soups',
            'Grill',
            'Breakfast',
        ]);

        return [
            'name' => $categoryName,
            'slug' => Str::slug($categoryName),
        ];
    }
}