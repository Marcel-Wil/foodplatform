import Layout from '../layouts/main-layout';
import React from 'react'


const menu = ({ foodItems }) => {
    console.log(foodItems);
    

    return (
        <div className='bg-[#FFF9EA]'>
            {/* discount banner */}
            <div className="pt-12"></div>
            <div className="mt-[6px] w-full bg-[#FF7A3D] p-2">
                <p className="text-center text-sm text-white">40€ discount (4x10€) with code B40</p>
            </div>

            {/* menu of the week */}
            <div className='bg-[#F9F1DE] px-5 py-12'>
                <div className='pt-8'>
                    <h1 className='text-center tracking-tight font-bold text-5xl uppercase mb-6'>
                        Menu of the week
                    </h1>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <a href="">
                            <button className='uppercase border-2 border-black px-5 py-3 rounded font-bold hover:text-[#F9F1DE] hover:bg-black text-lg'>
                                choose plan
                            </button>
                        </a>
                        <a href="">
                            <button className='uppercase bg-black font-bold border-2 border-black px-5 py-3 text-[#F9F1DE] rounded text-lg hover:bg-[#F9F1DE] hover:text-black'>
                                login
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* grid with fooditems */}
            <div className='max-w-screen-xl mx-auto mt-8'>
                <div className="grid grid-cols-3 gap-4">
                {foodItems.map((foodItem) => (
                    <div key={foodItem.id} className="">
                    <img
                        src="/images/pancakes.jpg"
                        alt={foodItem.name}
                        className="w-[384px] h-[384px] object-cover"
                    />
                    <h2 className="mt-2 text-lg font-semibold text-center">
                        {foodItem.name}
                    </h2>
                    </div>
                ))}
                </div>
            </div>


        </div>
    );
}

menu.layout = (page) => <Layout children={page} />;
export default menu