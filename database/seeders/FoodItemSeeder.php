<?php

namespace Database\Seeders;

use App\Models\FoodCategory;
use App\Models\FoodItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class FoodItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $imagePath = public_path("images/pancakes.jpg");

        if (!file_exists($imagePath)) {
            throw new \Exception("Default image not found at: {$imagePath}");
        }

        FoodItem::factory()->count(10)->make()->each(function ($item) use ($imagePath) {
            $item->food_category_id = FoodCategory::inRandomOrder()->first()->id;
            $item->restaurant_id = 1;
            $item->save();

            $item->addMedia($imagePath)
                ->preservingOriginal()
                ->toMediaCollection('food_images');
        });
    }
}