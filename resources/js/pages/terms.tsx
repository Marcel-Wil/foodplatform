// TermsPage.tsx

import Layout from '@/layouts/main-layout';

const TermsPage = () => {
    return (
        <div className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 sm:h-screen sm:py-10">
            <h1 className="mb-6 text-3xl font-bold">Terms & Conditions</h1>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">1. Introduction</h2>
                <p className="text-gray-600">
                    This platform is a culinary concept showcasing food recipes, restaurant concepts, and gastronomic experiences. All food images and
                    menu items displayed are for demonstration purposes and do not represent actual products available for purchase unless explicitly
                    stated.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">2. Use of Content</h2>
                <p className="text-gray-600">
                    All culinary content including recipes, food photography, and menu concepts are intended for inspirational purposes only.
                    Commercial use, reproduction, or republication of any content requires express written permission.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">3. Intellectual Property</h2>
                <p className="text-gray-600">
                    Recipe formulations, food styling concepts, and original culinary creations are protected intellectual property. All trademarks,
                    restaurant names, and brand logos featured belong to their respective owners.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">4. Food & Allergy Disclaimer</h2>
                <p className="text-gray-600">
                    Recipe information is provided for conceptual purposes only. We do not guarantee allergen-free preparation or nutritional
                    accuracy. Always consult professional dietary advice before attempting recipes.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">5. External Links</h2>
                <p className="text-gray-600">
                    Links to third-party food suppliers, restaurants, or culinary resources are provided for reference only. We are not responsible
                    for the quality, safety, or accuracy of external content.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">6. Changes to Terms</h2>
                <p className="text-gray-600">
                    We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the
                    updated terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">7. Contact</h2>
                <p className="text-gray-600">For questions regarding these terms or our culinary concepts, please contact us info@mywastudio.be.</p>
            </section>
        </div>
    );
};

TermsPage.layout = (page) => <Layout children={page} />;

export default TermsPage;
