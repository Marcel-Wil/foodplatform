import { useState } from 'react';
import Layout from '../layouts/main-layout';

const subscriptions = [
    [
        'What’s inside a Crowd Cooks box?',
        `Discover the Crowd Cooks box: delicious, pre-cooked meals ready to delight your taste buds! Each week, choose from 12 carefully crafted options. Each meal weighs a generous 450 grams and is presented in an eco-friendly, 100% recycled and recyclable container. Want to know the ingredients? Just click on the dish's photo to find out everything. Enjoy without compromise!`,
    ],
    [
        'How can I pause or cancel my subscription?',
        'Your Crowd Cooks box is 100% flexible! Pause or cancel your subscription anytime. There is no commitment. Simply log in to your customer account.',
    ],
];

const Faq = ({ faqs }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFAQ = (faq) => {
        setOpenFaq(faq === openFaq ? null : faq); // toggle open/close
    };

    return (
        <div className="bg-[#FFF9EA]">
            <h1 className="py-6 pt-40 pb-5 text-center text-6xl font-bold text-black">FREQUENTLY ASKED QUESTIONS</h1>

            {faqs &&
                faqs.map((faq, index) => (
                    <section className="mx-auto mt-12 max-w-6xl px-5 py-8 md:py-20">
                        <h2 className="font-display pb-4 text-center text-4xl font-bold tracking-tight text-black uppercase">{faq.name}</h2>
                        <div className="flex w-full flex-col text-black">
                            {faq.faqs &&
                                faq.faqs.map((value, index) => (
                                    <div key={index} className="border-black">
                                        <button
                                            onClick={() => toggleFAQ(value)}
                                            className="flex w-full cursor-pointer justify-between border-b-2 py-3 text-left"
                                        >
                                            <span>{value.question}</span>
                                            <span>{openFaq === value ? '-' : '+'}</span>
                                        </button>
                                        {openFaq === value && <div className="pt-2 pb-4 text-base">{value.answer}</div>}
                                    </div>
                                ))}
                        </div>
                    </section>
                ))}

            <section id="contact" className="mt-12 pb-12">
                <div className="mx-auto max-w-6xl bg-[#f9f1de] p-8 text-black">
                    <h3 className="mb-8 text-center text-3xl font-bold">Get in touch with us</h3>
                    <div className="flex justify-between">
                        <div className="flex w-1/2 flex-col space-y-8 px-4 py-2">
                            <p className="text-xl font-bold">Contact Information</p>
                            <div className="flex w-1/2 flex-col space-y-1">
                                <div className="flex space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-mail-icon lucide-mail"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>{' '}
                                    <p>Mail us</p>
                                </div>
                                <p>example@gmail.com</p>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-map-pin-icon lucide-map-pin"
                                    >
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <p>Visit us</p>
                                </div>
                                <p>2100, Antwerpen</p>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <div className="flex space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-phone-icon lucide-phone"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <p>Phone us</p>
                                </div>
                                <p>+ 324123123</p>
                            </div>

                            <div className="flex space-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </div>
                        </div>
                        <img src="images/contact.png" className="h-96 object-contain"></img>
                    </div>
                </div>
            </section>
        </div>
    );
};
Faq.layout = (page) => <Layout children={page} />;
export default Faq;
