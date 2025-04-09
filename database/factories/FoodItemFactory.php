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
        return [
            'name' => fake()->unique()->randomElement([ //create max 10 otherwise error (unique)
                'Margherita Pizza',
                'Sushi Roll',
                'Spicy Ramen',
                'Chicken Tikka',
                'Avocado Toast',
                'Beef Burger',
                'Vegan Salad',
                'Pancake Stack',
                'Tuna Sandwich',
                'Chocolate Cake',
            ]),
            'description' => fake()->sentence(),
            'price' => fake()->randomFloat(2, 5, 30), // price between 5.00 and 30.00
            'is_available' => True,
        ];
    }
}