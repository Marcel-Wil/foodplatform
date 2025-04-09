<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create one address for each existing user
        User::all()->each(function ($user) {
            Address::factory()->create([
                'user_id' => $user->id,
            ]);
        });

    }
}