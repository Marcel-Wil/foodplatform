import Layout from '../layouts/main-layout';

const homepage = () => {
  return (
    <div className='bg-[#FFF9EA]'>
        {/* discount banner */}
        <div className='pt-12'></div>
        <div className='bg-[#FF7A3D] p-2 w-full mt-[6px]'>
            <p className='text-white text-center text-sm'>
                40€ discount (4x10€) with code B40
            </p>
        </div>

        {/* picture on the left + order now button on the right */}
        <div className='flex'>
            <div className='w-1/2 h-[60dvh]'>
                <img className='w-full h-full' src='/images/homepage1.jpg' alt="" />
            </div>
            
            <div className='w-1/2 h-[60dvh] bg-[#FFF9EA]'>
                <div className='flex flex-col items-center justify-center text-center w-full h-full'>
                    <img className='w-96 mb-8' src='/images/crowdcooks.svg'/>
                    <h1 className='text-black text-6xl font-sans uppercase mb-4'>Fresh & local</h1>
                    <p className='text-black font-bold font-display uppercase text-4xl mb-8 tracking-tight'>Your ready-to-eat mealbox</p>
                    <button className='rounded-md border-2 border-black uppercase py-3 px-5 font-bold hover:bg-black text-xl text-black hover:text-[#FFF9EA]'>
                        ORDER NOW
                    </button>
                </div>
            </div>
        </div>

        {/* how it works banner */}
        <div className='bg-[#05AA02]'>
            <h3 className='font-extrabold uppercase text-4xl py-12 text-center text-black'>
                How it works
            </h3>
        </div>

        {/* videos banner */}
        <div className='grid grid-cols-3 max-w-6xl mx-auto my-12 px-5 gap-10 bg-[#FFF9EA]'>
            <div className='flex flex-col items-center max-w-xs mx-auto'>
                <video className='w-fit max-w-[200px]' autoPlay loop muted src='/images/video1.mp4'></video>
                <p className='font-bold text-lg mt-10 text-black leading-tight'>For as many people and as many meals as you like. Choose from 12 new meals every week, pause or cancel in 1 click. </p>
            </div>
            <div className='flex flex-col items-center max-w-xs mx-auto'>
                <video className='w-fit max-w-[200px]' autoPlay loop muted src='/images/video2.mp4'></video>
                <p className='font-bold text-lg mt-10 text-black leading-tight'>Our chefs cook with fresh, local and seasonal ingredients. Each meal is generous (+450g) and balanced nutritionally. </p>
            </div>
            <div className='flex flex-col items-center max-w-xs mx-auto'>
                <video className='w-fit max-w-[200px]' autoPlay loop muted src='/images/video3.mp4'></video>
                <p className='font-bold text-lg mt-10 text-black leading-tight'>The meals can be kept for 5 days in the fridge and reheated in a few minutes in the oven or a microwave. </p>
            </div>
        </div>

        {/* meal plan button */}
        <div className='w-full text-center py-12 px-5'>
            <a href='/plan'>
                <button className='text-black text-xl border-2 border-black hover:bg-black hover:text-[#FFF9EA] py-3 px-5 rounded-md font-extrabold p-2'>    
                    CHOOSE YOUR MEAL PLAN
                </button>
            </a>
        </div>

        {/* menu of the week */}
        <div className='bg-[#3B8CCE]'>
            <h3 className='font-extrabold uppercase text-4xl py-12 text-center text-black'>
                menu of the week
            </h3>
        </div>

        {/* 3 pictures */}
        <div className='grid grid-cols-3 gap-6 py-12 mx-auto max-w-6xl px-4'>
            <div>
                <img src='/images/image1.jpg' alt="" />
                <p className='text-black font-bold leading-tight text-center text-lg'>Chicken brochette with sweet potato mash, sweet and sour sauce, and bell pepper medley</p>
            </div>
            <div>
                <img src='/images/image2.jpg' alt="" />
                <p className='text-black font-bold leading-tight text-center text-lg'>Maroccan Bulgur with falafel</p>
            </div>
            <div>
                <img src='/images/image3.jpg' alt="" />
                <p className='text-black font-bold leading-tight text-center text-lg'>Fried rice with homemade Korean chicken</p>
            </div>
        </div>


        {/* view full menu */}
        <div className='bg-[#F9F1DE] text-center py-9'>
            <a href='/plan'>
                <button className='text-black text-xl border-2 border-black hover:bg-black hover:text-[#FFF9EA] py-3 px-5 rounded-md font-extrabold p-2 uppercase'>    
                    View full menu
                </button>
            </a>
        </div>

        <div className='pt-12 pb-24'>
            {/* text */}
            <div className='text-black font-extrabold text-5xl text-center mx-auto max-w-3xl pb-8 tracking-tight uppercase'>
                A WHOPPING 250.000 MEALS HAVE ALREADY BEEN DELIVERED! 
            </div>

            {/* facebook reviews */}
            <div className='text-black text-center text-xl font-extrabold mb-8'>
                Facebook Reviews
            </div>

            <div className='grid grid-cols-4 gap-6 max-w-[1135px] mx-auto mb-8'>
                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>
                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>
                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>
                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>

                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>
                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>
                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>
                <div className='w-[265px] h-[289px] bg-[#F9F1DE]'></div>
            </div>

            {/* load more */}
            <div className='w-full text-center mb-24'>
                <button className='bg-[#F2ECDE] text-black px-16 py-2 font-bold hover:bg-[#cecbc2] rounded-md'>
                    Load more
                </button>
            </div>
        </div>

        {/* text + img */}
        <div className='w-full flex'>
            <div className='w-1/2 max-h-[60dvh] bg-[#FCDB14]'>
                <div className='flex flex-col w-full h-full text-black items-center justify-center text-center py-12'>
                    <div className='font-extrabold uppercase text-4xl tracking-tight pb-6'>Delivery area</div>
                    <div className='flex flex-col pb-4 text-xl font-extrabold'>
                        <p>Brussels</p>
                        <p>Walloon Brabant</p>
                        <p>Liège</p>
                        <p>Charleroi</p>
                        <p>Namur</p>
                        <p>Flemish Brabant</p>
                        <p>Ghent</p>
                        <p>Antwerp</p>
                    </div>
                    <div className='uppercase underline'>
                        <a href="/faq">DELIVERY INFORMATION</a>
                    </div>
                </div>
            </div>
            <div className='w-1/2 max-h-[60dvh]'>
                <img className='w-full h-full' src='/images/image4.png' alt="" />
            </div>

        </div>

    </div>
  )
}

homepage.layout = (page) => <Layout children={page} />;

export default homepage;
