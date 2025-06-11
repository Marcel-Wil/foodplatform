<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Notifications\OrderCreated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Stripe\Stripe;
use Stripe\Checkout\Session as StripeCheckout;


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


        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $order = Order::create([
            'user_id' => $user->id,
            'restaurant_id' => 1,
            'address_id' => $address->id,
            'status' => 'pending',
            'payment_status' => 'unpaid',
            'payment_method' => $payment_method,
            'total_price' => $cart->cartGetTotalPrice(),
        ]);


        $total = $cart->cartGetTotalPrice();
        $checkoutSession = StripeCheckout::create([
            'payment_method_types' => ['card'],
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'eur',
                        'product_data' => [
                            'name' => 'Order #' . $order->id,
                        ],
                        'unit_amount' => intval($total * 100), // convert euros to cents
                    ],
                    'quantity' => 1,
                ]
            ],
            'mode' => 'payment',
            'metadata' => [
                'order_id' => $order->id,
            ],
            'success_url' => route('payment.success') . '?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('payment.cancel'),
        ]);



        return response()->json([
            'url' => $checkoutSession->url,
        ]);

    }
}