import Layout from '../layouts/main-layout';

const homepage = () => {
    return (
        <div className="bg-[#FFF9EA]">
            {/* discount banner */}
            {/* <div className="pt-12"></div>
            <div className="mt-[6px] w-full bg-[#FF7A3D] p-2">
                <p className="text-center text-sm text-white">40€ discount (4x10€) with code B40</p>
            </div> */}

            {/* picture on the left + order now button on the right */}
            <div className="flex flex-col sm:flex-row sm:items-center mt-13">
                <div className="h-[30dvh] sm:h-[60dvh] w-full sm:w-1/2">
                    <img className="h-full w-full" src="/images/mealprep.webp" alt="" />
                </div>

                <div className="sm:h-[60dvh] w-full sm:w-1/2 bg-[#FFF9EA] mt-12 mb-12 sm:mt-0 sm:mb-0">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                        {/* <img className="mb-8 w-60 sm:w-96" src="/images/crowdcooks.svg" /> */}
                        <h1 className='text-8xl font-extrabold'>Aurora</h1>
                        <h1 className="mb-4 font-sans text-6xl text-black uppercase">Fresh & local</h1>
                        <p className="font-display mb-8 text-4xl font-bold tracking-tight text-black uppercase">Your ready-to-eat mealbox</p>
                        <button className="rounded border-2 border-black px-5 py-3 text-xl font-bold text-black uppercase hover:bg-black hover:text-[#FFF9EA]">
                            ORDER NOW
                        </button>
                    </div>
                </div>
            </div>
            
            {/* menu of the week */}
            <div className="bg-[#3B8CCE]">
                <h3 className="py-12 text-center text-4xl font-extrabold text-black uppercase">menu of the week</h3>
            </div>

            {/* 3 pictures */}
            <div className="mx-auto grid max-w-sm sm:max-w-6xl grid-cols-1 sm:grid-cols-3 gap-6 px-4 my-12">
                <div>
                    <img className='w-[357px] h-[357px]' src="/images/avocadoToast.jpg" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">
                        Avocado Toast
                    </p>
                </div>
                <div>
                    <img className='w-[357px] h-[357px]' src="/images/spicyRamen.jpg" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">Spicy Ramen</p>
                </div>
                <div>
                    <img className='w-[357px] h-[357px]' src="/images/margheritaPizza.avif" alt="" />
                    <p className="text-center text-lg leading-tight font-bold text-black">Margherita Pizza</p>
                </div>
            </div>

            {/* view full menu */}
            {/* <div className="bg-[#F9F1DE] py-9 text-center">
                <a href="/plan">
                    <button className="rounded border-2 border-black p-2 px-5 py-3 text-xl font-extrabold text-black uppercase hover:bg-black hover:text-[#FFF9EA]">
                        View full menu
                    </button>
                </a>
            </div> */}

            <div className="w-full px-5 py-12 text-center">
                <a href="/menu">
                    <button className="rounded border-2 border-black p-2 px-5 py-3 text-xl font-extrabold text-black hover:bg-black hover:text-[#FFF9EA]">
                        View full menu
                    </button>
                </a>
            </div>

            {/* how it works banner */}
            <div className="bg-[#3B8CCE]">
                <h3 className="py-12 text-center text-4xl font-extrabold text-black uppercase">How it works</h3>
            </div>

            {/* videos banner */}
            <div className="mx-auto my-12 grid max-w-6xl grid-cols-1 sm:grid-cols-3 gap-10 bg-[#FFF9EA] px-5">
                <div className="mx-auto flex max-w-xs flex-col items-center">
                    <video className="w-fit max-w-[200px]" autoPlay loop muted src="/images/video1.mp4"></video>
                    <p className="mt-10 text-lg leading-tight font-bold text-black">
                        For as many people and as many meals as you like. Choose from 12 new meals every week, pause or cancel in 1 click.{' '}
                    </p>
                </div>
                <div className="mx-auto flex max-w-xs flex-col items-center">
                    <video className="w-fit max-w-[200px]" autoPlay loop muted src="/images/video2.mp4"></video>
                    <p className="mt-10 text-lg leading-tight font-bold text-black">
                        Our chefs cook with fresh, local and seasonal ingredients. Each meal is generous (+450g) and balanced nutritionally.{' '}
                    </p>
                </div>
                <div className="mx-auto flex max-w-xs flex-col items-center">
                    <video className="w-fit max-w-[200px]" autoPlay loop muted src="/images/video3.mp4"></video>
                    <p className="mt-10 text-lg leading-tight font-bold text-black">
                        The meals can be kept for 5 days in the fridge and reheated in a few minutes in the oven or a microwave.{' '}
                    </p>
                </div>
            </div>

            {/* meal plan button */}
            <div className="w-full px-5 py-12 text-center">
                <a href="/plan">
                    <button className="rounded border-2 border-black p-2 px-5 py-3 text-xl font-extrabold text-black hover:bg-black hover:text-[#FFF9EA]">
                        CHOOSE YOUR MEAL PLAN
                    </button>
                </a>
            </div>

            {/* reviews banner */}
            <div className="bg-[#3B8CCE]">
                <h3 className="py-12 text-center text-4xl font-extrabold text-black uppercase">Reviews</h3>
            </div>

            <div className="pt-12 pb-24">
                {/* text */}
                {/* <div className="mx-auto max-w-3xl pb-8 text-center text-5xl font-extrabold tracking-tight text-black uppercase">
                    A WHOPPING 250.000 MEALS HAVE ALREADY BEEN DELIVERED!
                </div> */}

                {/* facebook reviews */}
                <div className="mb-8 text-center text-xl font-extrabold text-black">Facebook Reviews</div>

                <div className="mx-auto mb-8 grid max-w-sm sm:max-w-[1135px] grid-cols-1 sm:grid-cols-4 gap-6">
                    <div className="h-[289px] sm:w-[265px] bg-[#F9F1DE]"></div>
                    <div className="h-[289px] sm:w-[265px] bg-[#F9F1DE]"></div>
                    <div className="h-[289px] sm:w-[265px] bg-[#F9F1DE]"></div>
                    <div className="h-[289px] sm:w-[265px] bg-[#F9F1DE]"></div>

                    {/* <div className="h-[289px] w-[265px] bg-[#F9F1DE]"></div>
                    <div className="h-[289px] w-[265px] bg-[#F9F1DE]"></div>
                    <div className="h-[289px] w-[265px] bg-[#F9F1DE]"></div>
                    <div className="h-[289px] w-[265px] bg-[#F9F1DE]"></div> */}
                </div>

                {/* load more */}
                <div className="mb-24 w-full text-center">
                    <button className="rounded bg-[#F2ECDE] px-16 py-2 font-bold text-black hover:bg-[#cecbc2]">Load more</button>
                </div>
            </div>

            {/* text + img */}
            <div className="flex flex-col sm:flex-row w-full">
                <div className="max-h-[60dvh] w-full bg-orange-400">
                    <div className="flex h-full w-full flex-col items-center justify-center py-12 text-center text-black">
                        <div className="pb-6 text-4xl font-extrabold tracking-tight uppercase">Delivery area</div>
                        <div className="flex flex-col pb-4 text-xl font-extrabold">
                            <p>Brussels</p>
                            <p>Walloon Brabant</p>
                            <p>Liège</p>
                            <p>Charleroi</p>
                            <p>Namur</p>
                            <p>Flemish Brabant</p>
                            <p>Ghent</p>
                            <p>Antwerp</p>
                        </div>
                        <div className="uppercase underline">
                            <a href="/faq">DELIVERY INFORMATION</a>
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
