import { router, usePage } from '@inertiajs/react';

const Fooditem = ({ foodItem }) => {
    const { auth } = usePage().props;
    const addToCart = () => {
        //only logged in users can put stuff into cart
        if (!auth.user) {
            window.location.href = '/login';
        }
        //handle adding to cart logic here:
        router.visit('/cart', {
            method: 'post',
            data: {
                product: foodItem,
            },
            preserveScroll: true,
        });
    };

    return (
        <div
            key={foodItem.id}
            className={`group relative h-[384px] w-[384px] ${foodItem.food_category.name === 'Vegan' ? 'hover:bg-green-600' : 'hover:bg-red-500'}`}
        >
            <img src="/images/pancakes.jpg" alt={foodItem.name} className="h-full w-full transition-opacity duration-300 group-hover:opacity-0" />
            {/* Overlay content that becomes visible on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-lg font-semibold text-gray-800">{foodItem.name}</h2>
                {foodItem.food_category.name === 'Vegan' ? (
                    <div className="absolute bottom-0 left-0 mb-2 ml-2 rounded-full border border-green-700 bg-green-500 px-4 py-1 text-white hover:bg-green-600">
                        {foodItem.food_category.name}
                    </div>
                ) : (
                    <div className="absolute bottom-0 left-0 mb-2 ml-2 rounded-full border border-red-700 bg-red-500 px-4 py-1 text-white hover:bg-red-600">
                        {foodItem.food_category.name}
                    </div>
                )}

                <p className="mt-2 text-sm text-black">${parseFloat(foodItem.price).toFixed(2)}</p>
            </div>
            {/* Keep the + button always visible */}
            <button
                onClick={addToCart}
                className="absolute right-2 bottom-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600"
            >
                +
            </button>
        </div>
    );
};

export default Fooditem;
