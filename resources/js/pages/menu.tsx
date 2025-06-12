import Fooditem from '@/components/fooditem';
import { FoodItem } from '@/types/menu';
import { ReactNode } from 'react';
import Layout from '../layouts/main-layout';

interface FoodItemsProps {
    foodItems: FoodItem[];
}

const menu = ({ foodItems = [] }: FoodItemsProps) => {
    return (
        <div className="bg-white">
            {/* discount banner */}
            <div className="pt-12"></div>
            <div className="mt-[12px] w-full bg-[#060302] p-2">
                <p className="text-center text-sm text-white">20% Discount with code AURORA</p>
            </div>

            {/* menu of the week */}
            <div className="px-5 py-12">
                <div className="pt-8">
                    <h1 className="mb-6 text-center text-5xl font-bold tracking-tight uppercase">Menu</h1>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <a href="/summary">
                            <button className="rounded border-2 border-black px-5 py-3 text-lg font-bold uppercase hover:cursor-pointer hover:bg-black hover:text-white">
                                Order Now
                            </button>
                        </a>
                        <a href="/login">
                            <button className="rounded border-2 border-black bg-black px-5 py-3 text-lg font-bold text-white uppercase hover:cursor-pointer hover:bg-white hover:text-black">
                                login
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* grid with fooditems */}
            <div className="mx-auto mt-8 mb-8 max-w-sm sm:max-w-screen-xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {foodItems.map((foodItem: FoodItem, index: number) => (
                        <Fooditem foodItem={foodItem} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

menu.layout = (page: ReactNode) => <Layout children={page} />;
export default menu;
