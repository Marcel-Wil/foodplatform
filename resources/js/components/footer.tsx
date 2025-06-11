const Footer = () => {
    return (
        <footer className="flex w-full flex-col items-center bg-[#f2da9c]">
            <div className="font-bol flex flex-wrap space-x-10 text-xl text-black underline">
                <a href="/menu">Menu</a>
                <a href="/faq">Faq</a>
                <a href="/faq#contact">Contact</a>
            </div>
            <div className="mx-auto my-6 w-1/2">
                <p className="text-center text-7xl font-black">Aurora</p>
            </div>

            <div className="w-full bg-black py-2 text-white sm:py-6">
                <div className="flex w-full flex-col justify-between px-4 sm:mx-auto sm:w-3/4 sm:flex-row">
                    <p>Belgium, Anwerpen 2000 </p>
                    <div className="flex flex-row space-x-2">
                        <a href="/terms" className="underline">
                            Terms{' '}
                        </a>
                        <a href="/privacy-policy" className="flex underline">
                            Privacy & Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
