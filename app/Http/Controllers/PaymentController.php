<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Notifications\OrderCreated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stripe\StripeClient;

class PaymentController extends Controller
{
    public function success(Request $request)
    {
        $session_id = $request->get('session_id');

        if (!$session_id) {
            return redirect()->route('orders')->with('error', 'Missing payment session.');
        }

        $stripe = new StripeClient(config('services.stripe.test_api_key'));
        $session = $stripe->checkout->sessions->retrieve($session_id);

        if (!$session || empty($session->metadata->order_id)) {
            return redirect()->route('orders')->with('error', 'Invalid session.');
        }

        $orderId = $session->metadata->order_id;
        $order = Order::find($orderId);

        if (!$order) {
            return redirect()->route('orders')->with('error', 'Order not found.');
        }


        // Mark order as paid and accepted
        $order->update([
            'payment_status' => 'paid',
            'status' => 'accepted',
        ]);

        $user = Auth::user();
        $cart = $user->cart;
        //clear the cart if succesfull order
        $cart->cartItems()->delete();
        $cart->delete();


        //send e-mail notification about the order
        $user->notify(new OrderCreated($order));

        return redirect()->route('orders')->with('success', 'Payment successful. Order confirmed!');
    }

    public function cancel()
    {
        return redirect()->route('orders')->with('error', 'Payment cancelled.');
    }
}