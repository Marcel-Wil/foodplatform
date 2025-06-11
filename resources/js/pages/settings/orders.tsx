import Layout from '@/layouts/main-layout';
import { Order } from '@/types/orders';
import { format } from 'date-fns';
import { ReactNode } from 'react';

interface OrdersProps {
    orders: Order[];
}

const Orders = ({ orders }: OrdersProps) => {
    return (
        <div className="mt-11 pt-2">
            {/* Navigation Tabs */}
            <div className="flex space-x-6 rounded-md bg-[#FFF9EA] p-4 font-semibold text-gray-700">
                <a href="/settings/profile" className="hover:underline">
                    Profile Settings
                </a>
                <a href="/settings/orders" className="text-yellow-700 underline">
                    My Orders
                </a>
            </div>

            <div className="mx-auto my-10 max-w-5xl">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">My Orders</h1>

                {orders && orders.length > 0 ? (
                    <div className="space-y-6">
                        {orders.map(
                            (order) => (
                                console.log(typeof order.total_price, order.total_price),
                                (
                                    <div
                                        key={order.id}
                                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg"
                                    >
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-sm text-gray-500">Order #{order.id}</span>
                                            <span
                                                className={`text-xs font-semibold uppercase ${order.payment_status === 'paid' ? 'text-green-600' : 'text-red-500'}`}
                                            >
                                                {order.payment_status}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 sm:grid-cols-4">
                                            <div>
                                                <p className="font-medium">Amount</p>
                                                <p>{Number(order.total_price || 0).toFixed(2)}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Status</p>
                                                <p>{order.status}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Payment Method</p>
                                                <p>{order.payment_method}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Ordered On</p>
                                                <p>{format(new Date(order.created_at), 'PPP')}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ),
                        )}
                    </div>
                ) : (
                    <div className="mt-10 text-center text-gray-500">You haven’t placed any orders yet.</div>
                )}
            </div>
        </div>
    );
};

Orders.layout = (page: ReactNode) => <Layout children={page} />;

export default Orders;
