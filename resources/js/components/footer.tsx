const Footer = () => {
    return (
        <footer className="flex w-full flex-col items-center bg-blue-400">
            <div className="flex flex-wrap space-x-10 text-xl font-bold">
                <a href="#">Menu</a>
                <a href="#">Plans</a>
                <a href="#">Faq</a>
                <a href="#">Login</a>
            </div>
            <div className="mx-auto my-6 w-1/2">
                <img src="/images/logo-B0sc7mDB.svg" alt="Logo" className="w-full" />
            </div>

            <div className="w-full bg-black py-6 text-gray-400">
                <div className="mx-auto flex w-3/4 justify-between">
                    <a href="#">Terms</a>
                    <p>THE CROWD COOKS, BE0643824434, 35 RUE DE LA LONGUE HAIE, BRUXELLES, 1000, BELGIUM 0496177443 </p>
                    <p>HELLO@CROWDCOOKS.BE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
