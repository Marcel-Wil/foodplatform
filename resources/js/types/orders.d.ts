export interface Order {
    id: number;
    user_id: number;
    restaurant_id: number;
    address_id: number;
    status: 'pending' | 'accepted' | 'rejected' | 'completed';
    payment_status: 'paid' | 'unpaid' | 'refunded';
    payment_method: 'card' | 'cash' | 'paypal';
    total_price: number;
    created_at: string;
    updated_at: string;
}
