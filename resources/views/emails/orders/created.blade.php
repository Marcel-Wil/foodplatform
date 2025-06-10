@component('mail::message')
# Hello {{ $user->name }}

Thank you for your order!

Order ID: {{ $order->id }}  
Total: ${{ number_format($order->total_price, 2) }}


Thanks,  
{{ config('app.name') }}
@endcomponent