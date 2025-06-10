<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addProduct(Request $request)
    {
        $user = $request->user();

        $cart = Cart::where('user_id', '=', $user->id)->first();
        if (!$cart) {
            $cart = new Cart;
            $cart->user_id = $user->id;
            $cart->save();
        }

        $ifExistsInCart = CartItem::where('food_item_id', $request->product['id'])->where('cart_id', $cart->id)->first();
        if ($ifExistsInCart) {
            $ifExistsInCart->quantity += 1;
            $ifExistsInCart->save();
            return to_route('menu');
        }

        if ($request->product['is_available']) {
            $cartItem = new CartItem;
            $cartItem->cart_id = $cart->id;
            $cartItem->food_item_id = $request->product['id'];
            $cartItem->quantity = 1;
            $cartItem->save();
        }

        return to_route('menu');
    }


    public function addProductFromSummary(Request $request)
    {
        $user = $request->user();
        $cart = Cart::where('user_id', '=', $user->id)->first();
        $ifExistsInCart = CartItem::where('food_item_id', $request->product['food_item_id'])->where('cart_id', $cart->id)->first();
        if ($ifExistsInCart) {
            $ifExistsInCart->quantity += 1;
            $ifExistsInCart->save();
            return to_route('summary');
        }

    }

    //this function decreases the quanity of an item in cart unless it's gonna go below 1 then it removes it
    public function deleteFromCart(Request $request)
    {
        $user = $request->user();
        $cart = Cart::where('user_id', '=', $user->id)->first();

        $ifExistsInCart = CartItem::where('food_item_id', $request->product['food_item_id'])->where('cart_id', $cart->id)->first();
        if ($ifExistsInCart) {
            if ($ifExistsInCart->quantity == 1) {
                $ifExistsInCart->delete();
                return to_route('summary');
            }
            $ifExistsInCart->quantity -= 1;
            $ifExistsInCart->save();
            return to_route('summary');
        }

    }


}