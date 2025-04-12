import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

const Navbar = () => {
    const { auth } = usePage().props;
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const logout = () => {
        router.post('/logout');
    };

    return (
        <nav className="fixed flex w-full flex-col items-center justify-between bg-[#FFF9EA] px-6 py-3 sm:flex-row sm:gap-16">
            <div className="flex w-full gap-16">
                <div className="flex w-full justify-between sm:justify-normal">
                    <a href="/" className="">
                        <img src="/images/crowdcooks.svg" alt="" />
                    </a>

                    {/* Mobile hamburger icon */}
                    <div className="sm:hidden" onClick={toggleMobileMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 cursor-pointer"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                    <div className="hidden gap-8 sm:block sm:flex sm:pl-10">
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
            </div>

            <div className="hidden gap-8 sm:block sm:flex">
                {auth.user ? (
                    <button onClick={logout} className="text-xl font-bold text-black hover:cursor-pointer">
                        Logout
                    </button>
                ) : (
                    <a href="/login" className="text-xl font-bold text-black">
                        Login
                    </a>
                )}

                <button className="text-xl font-bold text-black">EN</button>
            </div>

            {/* Mobile Menu (separate from flex container) */}
            <div className={`w-full sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col space-y-4 py-4 text-center text-base leading-6">
                    <a href="/" className="hover:underline">
                        Home
                    </a>
                    <a href="/menu" className="hover:underline">
                        Menu
                    </a>
                    <a href="/plans" className="hover:underline">
                        Plans
                    </a>
                    <a href="/faq" className="hover:underline">
                        Faq
                    </a>
                    <a href="/login" className="hover:underline">
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
