import Fooditem from '@/components/fooditem';
import Layout from '../layouts/main-layout';

const menu = ({ foodItems }) => {
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {foodItems.map((foodItem, index) => (
                        <Fooditem foodItem={foodItem} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

menu.layout = (page) => <Layout children={page} />;
export default menu;
