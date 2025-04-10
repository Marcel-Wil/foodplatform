<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class FoodItem extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'name',
        'description',
        'price',
        'restaurant_id',
        'food_category_id',
        'is_available',
    ];

    public static function foodItemsWithMedia($optionalFoodItems = null, $passedFrom = null)
    {

        if ($optionalFoodItems) {
            $foodItems = $optionalFoodItems;
        } else {
            $foodItems = FoodItem::all();
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

    public function restaurant(): BelongsTo
    {
        return $this->belongsTo(Restaurant::class);
    }

    public function food_category(): BelongsTo
    {
        return $this->belongsTo(FoodCategory::class);
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}