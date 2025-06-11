<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::factory()->count(3)->create();
        User::create([
            'name' => 'adminacc',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'admin_since' => now(),
            'password' => Hash::make('Password46341!%'),
            'remember_token' => Str::random(10),
        ]);
    }
}
