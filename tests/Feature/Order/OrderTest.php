<?php

use App\Models\Address;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\FoodCategory;
use App\Models\FoodItem;
use App\Models\Order;
use App\Models\Restaurant;
use App\Models\User;
use App\Notifications\OrderCreated;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;

uses(RefreshDatabase::class);

test('creates an order and clears cart', function () {
    Notification::fake();

    // create a restaurant
    $restaurant = Restaurant::factory()->create([
        'name' => 'CleanFood',
        'description' => 'Restaurant Cleanfood',
        'location' => 'antwerpen',
        'is_active' => true,
    ]);

    // Create a user and simulate logged in
    $user = User::factory()->create();

    $userAddress = Address::factory()->create([
        'user_id' => $user->id,
        'street' => 'Main Street',
        'city' => 'Brussels',
        'zipcode' => '1000',
        'country' => 'Belgium',
    ]);

    // Simulate existing cart and items
    $cart = Cart::factory()->create([
        'user_id' => $user->id,
        'restaurant_id' => $restaurant->id,
    ]);

    $foodcategory = FoodCategory::factory()->create([
        'name' => 'vegan',
        'slug' => 'vegan',
    ]);

    $fooditem = FoodItem::factory()->create([
        'name' => 'test food',
        'description' => 'lorem ipsum',
        'price' => 10,
        'restaurant_id' => $restaurant->id,
        'food_category_id' => $foodcategory->id,
        'is_available' => true,
    ]);

    CartItem::factory()->count(2)->create([
        'cart_id' => $cart->id,
        'food_item_id' => $fooditem->id,
        'quantity' => 2,
    ]);

    // Simulate request
    $response = $this->actingAs($user)->post(route('order'), [
        'payment_method' => 'card',
        'street' => 'Main Street',
        'city' => 'Brussels',
        'zipcode' => '1000',
    ]);

    // Check redirection
    $response->assertRedirect(route('orders'));

    // Assert order was created
    $this->assertDatabaseHas('orders', [
        'user_id' => $user->id,
        'payment_method' => 'card',
        'payment_status' => 'paid',
        'total_price' => 40.00,
    ]);

    // Assert address was created
    $this->assertDatabaseHas('addresses', [
        'user_id' => $user->id,
        'street' => 'Main Street',
        'city' => 'Brussels',
        'zipcode' => '1000',
        'country' => 'Belgium',
    ]);

    // Assert cart and items are deleted
    $this->assertDatabaseMissing('carts', ['id' => $cart->id]);
    $this->assertDatabaseMissing('cart_items', ['cart_id' => $cart->id]);

    // Assert notification was sent
    Notification::assertSentTo($user, OrderCreated::class);
});
