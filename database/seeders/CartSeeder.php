<?php

namespace Database\Seeders;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\FoodItem;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //for every user create a cart and random cart items to the cart
        User::all()->each(function ($user) {
            $cart = Cart::factory()->create([
                'user_id' => $user->id,
                'restaurant_id' => 1,
            ]);

            //create 1-10 cart items to a cart
            CartItem::factory()->count(fake()->numberBetween(1, 10))
                ->make()
                ->each(function ($item) use ($cart) {
                    $item->food_item_id = FoodItem::inRandomOrder()->first()->id;
                    $item->cart_id = $cart->id;
                    $item->save();
                });
        });

    }
}