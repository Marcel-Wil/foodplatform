import Layout from '@/layouts/main-layout';

const Checkout = ({ cartItems }) => {
    const calculateItemTotal = (item) => {
        return (item.food_item.price * item.quantity).toFixed(2);
    };

    const calculateCartTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.food_item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="px-4 pt-24 md:px-12 lg:px-24">
            <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-start justify-between rounded-2xl border bg-white p-4 shadow md:flex-row md:items-center"
                        >
                            {/* Optional image */}
                            {item.food_item.image_url && (
                                <img
                                    src={item.food_item.image_url}
                                    alt={item.food_item.name}
                                    className="mb-4 h-24 w-24 rounded-xl object-cover md:mb-0"
                                />
                            )}

                            {/* Info */}
                            <div className="flex-1 md:ml-4">
                                <h2 className="text-lg font-semibold">{item.food_item.name}</h2>
                                <p className="text-sm text-gray-500">{item.food_item.description}</p>
                                <div className="flex flex-row space-x-4">
                                    <div className="mt-2 text-sm text-gray-700">
                                        Quantity: <span className="font-medium">{item.quantity}</span>
                                    </div>
                                    <div className="mt-2 flex flex-row space-x-3">
                                        <span>-</span>
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-700">
                                    Price per item: <span className="font-medium">${item.food_item.price}</span>
                                </div>
                                <div className="mt-1 text-sm font-semibold">Total: ${calculateItemTotal(item)}</div>
                            </div>
                        </div>
                    ))}

                    {/* Cart total */}
                    <div className="mt-8 text-right">
                        <h2 className="text-xl font-bold">Cart Total: ${calculateCartTotal()}</h2>
                        <button className="mt-2 mb-2 rounded-full bg-red-500 px-4 py-2 text-black hover:cursor-pointer">Order Now</button>
                    </div>
                </div>
            )}
        </div>
    );
};

Checkout.layout = (page) => <Layout children={page} />;

export default Checkout;
