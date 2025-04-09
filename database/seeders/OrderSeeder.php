<?php

namespace Database\Seeders;

use App\Models\FoodItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::all()->each(function ($user) {
            $orders = Order::factory()->count(fake()->numberBetween(1, 5))->create([
                'user_id' => $user->id,
                'address_id' => $user->address()->first()->id,
                'status' => fake()->randomElement([ //pending, accepted, delivered, cancelled
                    'pending',
                    'accepted',
                    'delivered',
                    'cancelled',
                ]),
                'payment_status' => fake()->randomElement([
                    'unpaid',
                    'paid',
                    'failed'
                ]),
                'payment_method' => fake()->randomElement([
                    'bancontact',
                    'cash',
                    'crypto' //lol
                ]),
                'total_price' => fake()->randomFloat(1, 1, 100)
            ]);

            $orders->each(function ($order) {
                OrderItem::factory()->count(fake()->numberBetween(1, 10))
                    ->make()
                    ->each(function ($item) use ($order) {
                        $foodItem = FoodItem::inRandomOrder()->first();

                        $item->order_id = $order->id;
                        $item->food_item_id = $foodItem->id;
                        $item->quantity = fake()->numberBetween(1, 6);
                        $item->price_at_time = $foodItem->price;
                        $item->save();
                    });
            });

        });
    }
}