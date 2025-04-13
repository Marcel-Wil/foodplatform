<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Termwind\Components\Hr;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'restaurant_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function restaurant(): BelongsTo
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public static function getTotalCartItems()
    {
        $user = User::where('id', '=', auth()->id())->first();
        if (!$user) {
            return 0;
        }
        $cart = Cart::firstOrCreate(
            ['user_id' => $user->id], // Condition to check
            ['created_at' => now(), 'updated_at' => now()] // Default values if creating a new cart
        );

        $cart_items = CartItem::where('cart_id', $cart->id)
            ->with('foodItem') // Eager load the related products
            ->get();
        return $cart_items->count();
    }

}