import Layout from '../layouts/main-layout';

const menu = ({ foodItems }) => {
    console.log(foodItems);
    return (
        <div className="bg-[#FFF9EA]">
            {/* discount banner */}
            <div className="pt-12"></div>
            <div className="mt-[6px] w-full bg-[#FF7A3D] p-2">
                <p className="text-center text-sm text-white">40€ discount (4x10€) with code B40</p>
            </div>

            {/* menu of the week */}
            <div className="bg-[#F9F1DE] px-5 py-12">
                <div className="pt-8">
                    <h1 className="mb-6 text-center text-5xl font-bold tracking-tight uppercase">Menu of the week</h1>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <a href="">
                            <button className="rounded border-2 border-black px-5 py-3 text-lg font-bold uppercase hover:bg-black hover:text-[#F9F1DE]">
                                choose plan
                            </button>
                        </a>
                        <a href="">
                            <button className="rounded border-2 border-black bg-black px-5 py-3 text-lg font-bold text-[#F9F1DE] uppercase hover:bg-[#F9F1DE] hover:text-black">
                                login
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* grid with fooditems */}
            <div className="mx-auto mt-8 max-w-sm sm:max-w-screen-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {foodItems.map((foodItem) => (
                        <div
                            key={foodItem.id}
                            className={`group relative h-[384px] w-[384px] ${foodItem.food_category.name === 'Vegan' ? 'hover:bg-green-600' : 'hover:bg-red-500'}`}
                        >
                            <img
                                src="/images/pancakes.jpg"
                                alt={foodItem.name}
                                className="h-full w-full transition-opacity duration-300 group-hover:opacity-0"
                            />
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
                            <span className="absolute right-2 bottom-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600">
                                +
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

menu.layout = (page) => <Layout children={page} />;
export default menu;
