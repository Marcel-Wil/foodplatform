const Footer = () => {
    return (
        <footer className="flex w-full flex-col items-center bg-[#f2da9c]">
            <div className="font-bol flex flex-wrap space-x-10 text-xl text-black underline">
                <a href="#">Menu</a>
                <a href="#">Contact</a>
                <a href="#">Faq</a>
                <a href="#">Login</a>
            </div>
            <div className="mx-auto my-6 w-1/2">
                <p className="text-center text-7xl font-black">Aurora</p>
            </div>

            <div className="w-full bg-black py-6 text-white">
                <div className="mx-auto flex w-3/4 justify-between">
                    <a href="#">Terms</a>
                    <p>Belgium, Anwerpen 2000 </p>
                    <p>info@aurora.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
