// TermsPage.tsx

import Layout from '@/layouts/main-layout';

const TermsPage = () => {
    return (
        <div className="mx-auto flex h-screen max-w-7xl flex-col justify-center px-4 py-10">
            <h1 className="mb-6 text-3xl font-bold">Terms & Conditions</h1>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">1. Introduction</h2>
                <p className="text-gray-600">
                    This website is a proof of concept for showcasing models, fashion, and modeling-related content. All images used are stock images
                    and do not represent real endorsements, partnerships, or affiliations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">2. Use of Content</h2>
                <p className="text-gray-600">
                    All visual content on this site is intended for demonstration purposes only. You may not copy, reproduce, or repurpose any content
                    without prior written permission.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">3. Intellectual Property</h2>
                <p className="text-gray-600">
                    All trademarks, logos, and other intellectual property featured are the property of their respective owners. This site does not
                    claim ownership over any third-party assets.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">4. Limitation of Liability</h2>
                <p className="text-gray-600">
                    We are not liable for any loss or damages resulting from the use or inability to use this website, including but not limited to
                    inaccuracies, errors, or interruptions.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">5. External Links</h2>
                <p className="text-gray-600">
                    This site may contain links to external websites. We are not responsible for the content, practices, or accuracy of those
                    third-party sites.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">6. Changes to Terms</h2>
                <p className="text-gray-600">
                    We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the
                    new terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">7. Contact</h2>
                <p className="text-gray-600">
                    For questions or concerns regarding these terms, please contact us through the website's contact form or email.
                </p>
            </section>
        </div>
    );
};

TermsPage.layout = (page) => <Layout children={page} />;

export default TermsPage;
