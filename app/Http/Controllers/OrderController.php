<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Notifications\OrderCreated;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //TODO: make a custom request to validate the data
    public function order(Request $request)
    {
        $user = $request->user();
        $cart = $user->cart;
        //Address data from frontend request
        $payment_method = $request['payment_method'];
        $street = $request['street'];
        $city = $request['city'];
        $zipcode = $request['zipcode'];
        $country = 'Belgium';

        //TODO: validate the data

        $address = $user->address;
        if ($address) {
            //if the address got changed since previous one then update
            if ($address->street != $street || $address->city != $city || $address->zipcode != $zipcode) {
                $address->update([
                    'street' => $street,
                    'city' => $city,
                    'zipcode' => $zipcode,
                    'country' => $country,
                ]);
            }
        } else {
            $address = Address::create([
                'user_id' => $user->id,
                'street' => $street,
                'city' => $city,
                'zipcode' => $zipcode,
                'country' => $country,
            ]);
        }



        $order = Order::create([
            'user_id' => $user->id,
            'restaurant_id' => 1,
            'address_id' => $address->id,
            'status' => 'accepted',
            'payment_status' => 'paid',
            'payment_method' => $payment_method,
            'total_price' => $cart->cartGetTotalPrice(),
        ]);

        //clear the cart if succesfull order
        $cart->cartItems()->delete();
        $cart->delete();


        //send e-mail notification about the order
        $user->notify(new OrderCreated($order));

        return to_route('orders');
    }
}