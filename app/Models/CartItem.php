<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'cart_id',
        'food_item_id',
        'quantity',
    ];

    public function cart(): BelongsTo
    {
        return $this->belongsTo(Cart::class);
    }

    public function foodItem(): BelongsTo
    {
        return $this->belongsTo(FoodItem::class);
    }

    // copied it from fooditem cba changing names
    public static function cartItemsWithMedia($optionalFoodItems = null, $passedFrom = null)
    {

        if ($optionalFoodItems) {
            $foodItems = $optionalFoodItems;
        } else {
            $foodItems = FoodItem::with('food_category')->get();
        }
        $foodItemsWithMedia = $foodItems->map(function ($foodItem) use ($passedFrom) {
            if ($passedFrom) {
                $foodItem->product->picture = $foodItem->foodItem->getFirstMediaUrl('foodItem_image');
            } else {
                $foodItem->picture = $foodItem->getFirstMediaUrl('foodItem_image');
            }

            return $foodItem;
        });

        return $foodItemsWithMedia;
    }
}
