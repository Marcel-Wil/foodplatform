<?php

namespace Database\Seeders;

use App\Models\FoodCategory;
use App\Models\FoodItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FoodItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        FoodItem::factory()->count(10)->make()->each(function ($item) {
            $item->food_category_id = FoodCategory::inRandomOrder()->first()->id;
            $item->restaurant_id = 1;
            $item->save();
        });
    }
}