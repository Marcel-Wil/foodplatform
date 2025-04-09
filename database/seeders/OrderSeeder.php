<?php

namespace Database\Seeders;

use App\Models\Order;
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
            Order::factory()->count(fake()->randomNumber(1, 5))->create([
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
        });
    }
}