import { Link } from '@inertiajs/react';
import Layout from '../layouts/main-layout';

const homepage = () => {
    return (
        <div className="bg-white">
            {/* discount banner */}
            {/* <div className="pt-12"></div>
            <div className="mt-[6px] w-full bg-[#FF7A3D] p-2">
                <p className="text-center text-sm text-white">40€ discount (4x10€) with code B40</p>
            </div> */}

            {/* picture on the left + order now button on the right */}
            <div className="mt-13 flex flex-col sm:flex-row sm:items-center">
                <div className="h-[30dvh] w-full sm:h-[60dvh] sm:w-1/2">
                    <img className="h-full w-full" src="/images/mealprep.webp" alt="" />
                </div>

                <div className="mt-12 mb-12 w-full bg-white sm:mt-0 sm:mb-0 sm:h-[60dvh] sm:w-1/2">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                        {/* <img className="mb-8 w-60 sm:w-96" src="/images/crowdcooks.svg" /> */}
                        <h1 className="text-8xl font-extrabold">Aurora</h1>
                        <h1 className="mb-4 font-sans text-6xl text-black uppercase">Fresh & local</h1>
                        <p className="font-display mb-8 text-4xl font-bold tracking-tight text-black uppercase">Your ready-to-eat mealbox</p>
                        <Link
                            href="/menu"
                            className="rounded border-2 border-black px-5 py-3 text-xl font-bold text-black uppercase hover:cursor-pointer hover:bg-black hover:text-[#FFF9EA]"
                        >
                            ORDER NOW
                        </Link>
                    </div>
                </div>
            </div>

            {/* menu of the week */}
            <div className="bg-[#3B8CCE]">
                <h3 className="py-8 text-center text-4xl font-extrabold text-black uppercase">view our menu</h3>
            </div>

            {/* 3 pictures */}
            <div className="mx-auto my-12 grid max-w-sm grid-cols-1 gap-6 px-4 sm:max-w-6xl sm:grid-cols-3">
                <div>
                    <img className="h-[357px] w-[357px]" src="/images/avocadoToast.jpg" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">Avocado Toast</p>
                </div>
                <div>
                    <img className="h-[357px] w-[357px]" src="/images/spicyRamen.jpg" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">Spicy Ramen</p>
                </div>
                <div>
                    <img className="h-[357px] w-[357px]" src="/images/margheritaPizza.avif" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">Margherita Pizza</p>
                </div>
            </div>
            <div className="mx-auto my-12 grid max-w-sm grid-cols-1 gap-6 px-4 sm:flex sm:max-w-6xl sm:justify-center">
                <div>
                    <img className="h-[357px] w-[357px]" src="/images/avocadoToast.jpg" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">Avocado Toast</p>
                </div>
                <div>
                    <img className="h-[357px] w-[357px]" src="/images/avocadoToast.jpg" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">Avocado Toast</p>
                </div>
            </div>

            <div className="w-full px-5 py-12 text-center">
                <a href="/menu">
                    <button className="rounded border-2 border-black p-2 px-5 py-3 text-xl font-extrabold text-black hover:cursor-pointer hover:bg-black hover:text-[#FFF9EA]">
                        View full menu
                    </button>
                </a>
            </div>

            {/* how it works banner */}
            <div className="bg-[#3B8CCE]">
                <h3 className="py-8 text-center text-4xl font-extrabold text-black uppercase">Fresh from our kitchen</h3>
            </div>

            {/* chefs */}
            <div className="mx-auto my-12 grid max-w-6xl grid-cols-1 gap-10 bg-white px-5 sm:flex sm:justify-center">
                <img src="/images/chef1.jpg" className="h-[400px] object-cover" />
                <img src="/images/chef2.jpg" className="h-[400px] object-cover" />
            </div>

            {/* meal plan button */}
            <div className="my-12 w-full px-5 text-center">
                <a href="/login">
                    <button className="rounded border-2 border-black p-2 px-5 py-3 text-xl font-extrabold text-black hover:cursor-pointer hover:bg-black hover:text-[#FFF9EA]">
                        Order From Our Kitchen
                    </button>
                </a>
            </div>

            {/* reviews banner */}
            <div className="bg-[#3B8CCE]">
                <h3 className="py-8 text-center text-4xl font-extrabold text-black uppercase">Reviews</h3>
            </div>

            <div className="pt-12 pb-24">
                {/* text */}
                {/* <div className="mx-auto max-w-3xl pb-8 text-center text-5xl font-extrabold tracking-tight text-black uppercase">
                    A WHOPPING 250.000 MEALS HAVE ALREADY BEEN DELIVERED!
                </div> */}

                {/* reviews */}
                <div className="mb-8 text-center text-xl font-extrabold text-black">Reviews</div>

                <div className="mx-auto mb-8 grid max-w-sm grid-cols-1 gap-6 sm:max-w-[1135px] sm:grid-cols-4">
                    <div className="flex h-[289px] w-full flex-col justify-between rounded-2xl bg-[#F9F1DE] p-4 shadow-md sm:w-[265px]">
                        {/* Top: Star rating */}
                        <div className="flex items-center space-x-1 text-yellow-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.431L24 9.588l-6 5.851L19.336 24 12 20.017 4.664 24 6 15.439 0 9.588l8.332-1.57z" />
                                </svg>
                            ))}
                        </div>

                        {/* Middle: Review content */}
                        <p className="mt-3 flex-1 text-sm text-gray-700">
                            “The ramen was absolutely incredible! Perfect spice level and great portion size. Will definitely order again!”
                        </p>

                        {/* Bottom: Reviewer name + date */}
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-800">Sarah M.</p>
                            <p className="text-xs text-gray-500">April 12, 2025</p>
                        </div>
                    </div>

                    <div className="flex h-[289px] w-full flex-col justify-between rounded-2xl bg-[#F9F1DE] p-4 shadow-md sm:w-[265px]">
                        <div className="flex items-center space-x-1 text-yellow-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.431L24 9.588l-6 5.851L19.336 24 12 20.017 4.664 24 6 15.439 0 9.588l8.332-1.57z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mt-3 flex-1 text-sm text-gray-700">
                            “Fast delivery and the food was still hot! Everything tasted homemade. Highly recommend the dumplings.”
                        </p>
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-800">Jason R.</p>
                            <p className="text-xs text-gray-500">April 10, 2025</p>
                        </div>
                    </div>

                    <div className="flex h-[289px] w-full flex-col justify-between rounded-2xl bg-[#F9F1DE] p-4 shadow-md sm:w-[265px]">
                        <div className="flex items-center space-x-1 text-yellow-500">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.431L24 9.588l-6 5.851L19.336 24 12 20.017 4.664 24 6 15.439 0 9.588l8.332-1.57z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mt-3 flex-1 text-sm text-gray-700">
                            “I liked the food, but the delivery took a bit longer than expected. Still, the sushi was fresh and flavorful.”
                        </p>
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-800">Lena T.</p>
                            <p className="text-xs text-gray-500">April 9, 2025</p>
                        </div>
                    </div>

                    <div className="flex h-[289px] w-full flex-col justify-between rounded-2xl bg-[#F9F1DE] p-4 shadow-md sm:w-[265px]">
                        <div className="flex items-center space-x-1 text-yellow-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4" viewBox="0 0 24 24">
                                    <path d="M12 .587l3.668 7.431L24 9.588l-6 5.851L19.336 24 12 20.017 4.664 24 6 15.439 0 9.588l8.332-1.57z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mt-3 flex-1 text-sm text-gray-700">
                            “Absolutely loved the spicy ramen! It hit just the right level of heat. Definitely ordering again soon.”
                        </p>
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-800">Marcus D.</p>
                            <p className="text-xs text-gray-500">April 8, 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* text + img */}
            <div className="flex w-full flex-col sm:flex-row">
                <div className="max-h-[60dvh] w-full bg-orange-400">
                    <div className="flex h-full w-full flex-col items-center justify-center py-12 text-center text-black">
                        <div className="pb-6 text-4xl font-extrabold tracking-tight uppercase">Delivery area</div>
                        <div className="flex flex-col pb-4 text-xl font-extrabold">
                            <p>Liège</p>
                            <p>Charleroi</p>
                            <p>Brussels</p>
                            <p>Namur</p>
                            <p>Flemish Brabant</p>
                            <p>Walloon Brabant</p>
                            <p>Antwerp</p>
                            <p>Ghent</p>
                        </div>
                    </div>
                </div>
                {/* <div className="max-h-[60dvh] w-full sm:w-1/2">
                    <img className="h-full w-full" src="/images/image4.png" alt="" />
                </div> */}
            </div>
        </div>
    );
};

homepage.layout = (page) => <Layout children={page} />;

export default homepage;
