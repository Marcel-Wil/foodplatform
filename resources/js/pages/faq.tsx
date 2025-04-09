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

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index); // toggle open/close
    };

    return (
        <>
            <h1 className="bg-white py-6 pt-12 pb-5 text-center text-6xl font-bold text-black">FREQUENTLY ASKED QUESTIONS</h1>
            <section className="mx-auto mt-12 max-w-6xl bg-white px-5 py-8 md:py-20">
                <h2 className="font-display pb-4 text-center text-4xl font-bold tracking-tight text-black uppercase">
                    MY 100% FLEXIBLE SUBSCRIPTION
                </h2>
                <div className="flex w-full flex-col text-black">
                    {subscriptions &&
                        subscriptions.map((value, index) => (
                            <div key={index} className="border-black">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full cursor-pointer justify-between border-b-2 py-3 text-left"
                                >
                                    <span>{value[0]}</span>
                                    <span>{openIndex === index ? '-' : '+'}</span>
                                </button>
                                {openIndex === index && <div className="pt-2 pb-4 text-base">{value[1]}</div>}
                            </div>
                        ))}
                </div>
            </section>
            <section className="mx-auto mt-12 max-w-6xl bg-white px-5 py-8 md:py-20">
                <h2 className="font-display pb-4 text-center text-4xl font-bold tracking-tight text-black uppercase">
                    MY 100% FLEXIBLE SUBSCRIPTION
                </h2>
                <div className="flex w-full flex-col text-black">
                    {subscriptions &&
                        subscriptions.map((value, index) => (
                            <div key={index} className="border-black">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full cursor-pointer justify-between border-b-2 py-3 text-left"
                                >
                                    <span>{value[0]}</span>
                                    <span>{openIndex === index ? '-' : '+'}</span>
                                </button>
                                {openIndex === index && <div className="pt-2 pb-4 text-base">{value[1]}</div>}
                            </div>
                        ))}
                </div>
            </section>
            <section className="mx-auto mt-12 max-w-6xl bg-white px-5 py-8 md:py-20">
                <h2 className="font-display pb-4 text-center text-4xl font-bold tracking-tight text-black uppercase">
                    MY 100% FLEXIBLE SUBSCRIPTION
                </h2>
                <div className="flex w-full flex-col text-black">
                    {subscriptions &&
                        subscriptions.map((value, index) => (
                            <div key={index} className="border-black">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full cursor-pointer justify-between border-b-2 py-3 text-left"
                                >
                                    <span>{value[0]}</span>
                                    <span>{openIndex === index ? '-' : '+'}</span>
                                </button>
                                {openIndex === index && <div className="pt-2 pb-4 text-base">{value[1]}</div>}
                            </div>
                        ))}
                </div>
            </section>
            <section className="mx-auto mt-12 max-w-6xl bg-white px-5 py-8 md:py-20">
                <h2 className="font-display pb-4 text-center text-4xl font-bold tracking-tight text-black uppercase">
                    MY 100% FLEXIBLE SUBSCRIPTION
                </h2>
                <div className="flex w-full flex-col text-black">
                    {subscriptions &&
                        subscriptions.map((value, index) => (
                            <div key={index} className="border-black">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full cursor-pointer justify-between border-b-2 py-3 text-left"
                                >
                                    <span>{value[0]}</span>
                                    <span>{openIndex === index ? '-' : '+'}</span>
                                </button>
                                {openIndex === index && <div className="pt-2 pb-4 text-base">{value[1]}</div>}
                            </div>
                        ))}
                </div>
            </section>
            <section id="contact" className="mt-12 mb-8">
                <div className="mx-auto max-w-6xl bg-white p-8 text-black">
                    <h3 className="mb-8 text-center text-3xl font-bold">Get in touch with us</h3>
                    <div className="flex justify-between">
                        <div className="flex flex-col space-y-4 border px-4 py-2">
                            <p className="text-xl font-bold">Contact Information</p>
                            <div className="flex space-x-4">
                                IC <p>Mail us</p>
                            </div>
                            <div className="flex space-x-4">
                                IC <p>Mail us</p>
                            </div>
                            <div className="flex space-x-4">
                                IC <p>Mail us</p>
                            </div>
                            <div className="flex space-x-4">
                                <p>IC</p> <p>IC</p>
                            </div>
                        </div>
                        <img src="images/contact.png" className="h-96 object-contain"></img>
                    </div>
                </div>
            </section>
        </>
    );
};
Faq.layout = (page) => <Layout children={page} />;
export default Faq;
