<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FoodItem>
 */
class FoodItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $meals = [
            ['BBQ Chicken', 1],
            ['Grilled Beef Burger', 1],
            ['Spicy Lamb Curry', 1],
            ['Honey Garlic Chicken Wings', 1],
            ['Teriyaki Salmon Bowl', 1],
            ['Vegan Buddha Bowl', 2],
            ['Tofu Stir Fry', 2],
            ['Chickpea Shawarma Wrap', 2],
            ['Vegan Mac & Cheese', 2],
            ['Grilled Veggie Tacos', 2],
        ];

        $randomMeal = fake()->unique()->randomElement($meals);

        return [
            'name' => $randomMeal[0],
            'food_category_id' => $randomMeal[1],
            'description' => fake()->sentence(),
            'price' => fake()->randomFloat(2, 5, 30), // price between 5.00 and 30.00
            'is_available' => true,
        ];
    }
}
