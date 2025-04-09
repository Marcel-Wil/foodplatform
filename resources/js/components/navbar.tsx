// import crowdcooks from '../../../storage/app/public/crowdcooks.svg'

const navbar = () => {
    return (
        <nav className="fixed flex w-full items-center justify-between gap-16 bg-[#FFF9EA] px-6 py-3">
            <div className="flex gap-16">
                <a href="/">{/* <img src={crowdcooks} alt="" /> */}</a>
                <div className="flex gap-8">
                    <a href="/menu" className="text-xl font-bold text-black hover:underline">
                        Menu
                    </a>
                    <a href="/plan" className="text-xl font-bold text-black hover:underline">
                        Plans
                    </a>
                    <a href="/faq" className="text-xl font-bold text-black hover:underline">
                        Faq
                    </a>
                    <a href="/contact" className="text-xl font-bold text-black hover:underline">
                        Contact us
                    </a>
                </div>
            </div>

            <div className="flex gap-8">
                <a href="/login" className="text-xl font-bold text-black">
                    Login
                </a>
                <button className="text-xl font-bold text-black">EN</button>
            </div>
        </nav>
    );
};

export default navbar;
