import Layout from '@/layouts/main-layout';
import { SharedData } from '@/types';
import { CartItem } from '@/types/cart';
import { router, usePage } from '@inertiajs/react';
import React, { ReactNode, useState } from 'react';

interface CartItemsProps {
    cartItems: CartItem[];
}

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const OrderDetails = ({ cartItems }: CartItemsProps) => {
    const { auth } = usePage<SharedData>().props;
    console.log(cartItems);

    const [formData, setFormData] = useState({
        street: auth?.address?.[0]?.street || '',
        city: auth?.address?.[0]?.city || '',
        zipcode: auth?.address?.[0]?.zipcode || '',
        country: 'Belgium',
        payment_method: 'card',
        delivery_time: '',
    });

    const handleChange = (e: React.ChangeEvent<FormElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateCartTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.food_item.price * item.quantity, 0).toFixed(2);
    };

    const order = () => {
        if (!auth.user) {
            window.location.href = '/login';
            return;
        }

        router.visit('/order', {
            method: 'post',
            data: formData,
            preserveScroll: true,
        });
    };

    return (
        <div className="px-4 pt-24 md:px-12 lg:px-24">
            <h1 className="mb-6 text-2xl font-bold">Delivery & Payment</h1>

            <div className="space-y-6">
                {/* Address Form */}
                <div className="space-y-3 rounded-2xl border bg-white p-4 shadow">
                    <label className="block text-sm font-semibold text-gray-700">Street</label>
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 text-sm"
                        placeholder="123 Main St"
                    />

                    <label className="block text-sm font-semibold text-gray-700">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 text-sm"
                        placeholder="City"
                    />

                    <label className="block text-sm font-semibold text-gray-700">Zipcode</label>
                    <input
                        type="text"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 text-sm"
                        placeholder="Postal code"
                    />

                    <label className="block text-sm font-semibold text-gray-700">Country</label>
                    <input
                        type="text"
                        name="country"
                        value="Belgium"
                        readOnly
                        className="w-full cursor-not-allowed rounded-lg border bg-gray-100 p-3 text-sm text-gray-600"
                    />
                </div>

                {/* Payment Method */}
                <div className="rounded-2xl border bg-white p-4 shadow">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Payment Method</label>
                    <select
                        name="payment_method"
                        value={formData.payment_method}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 text-sm"
                    >
                        <option value="card">Credit/Debit Card</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>

                {/* Delivery Time */}
                <div className="rounded-2xl border bg-white p-4 shadow">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Preferred Delivery Time</label>
                    <input
                        type="datetime-local"
                        name="delivery_time"
                        value={formData.delivery_time}
                        onChange={handleChange}
                        className="w-full rounded-lg border p-3 text-sm"
                    />
                </div>

                {/* Submit */}
                <div className="text-right">
                    <h2 className="text-xl font-bold">Cart Total: ${calculateCartTotal()}</h2>
                    <button
                        onClick={order}
                        className="my-2 cursor-pointer rounded border-2 border-black px-5 py-2 text-xl font-extrabold text-black hover:bg-black hover:text-[#FFF9EA]"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

OrderDetails.layout = (page: ReactNode) => <Layout children={page} />;
export default OrderDetails;
