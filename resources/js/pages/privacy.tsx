// PrivacyPolicyPage.tsx

import Layout from '@/layouts/main-layout';

const PrivacyPolicyPage = () => {
    return (
        <div className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 sm:h-screen sm:py-10">
            <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">1. Overview</h2>
                <p className="text-gray-600">
                    This culinary platform is a concept showcasing food recipes, restaurant ideas, and gastronomic experiences. As a demonstration
                    site, it does not collect, store, or process any personal user data related to food preferences, dietary restrictions, or ordering
                    information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">2. Data Collection Policy</h2>
                <p className="text-gray-600">
                    We do not collect personal information, dietary preferences, or browsing history. The platform operates without cookies, tracking
                    technologies, or user accounts. Any recipe submissions or menu interactions are simulated for demonstration purposes only.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">3. Third-Party Services</h2>
                <p className="text-gray-600">
                    This food concept does not integrate with any third-party delivery services, payment processors, or restaurant APIs that might
                    collect user information. All menu displays and culinary content are presented as static, non-transactional demonstrations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">4. Data Security</h2>
                <p className="text-gray-600">
                    Since no user data is collected for ordering, delivery, or personalization features, no special security measures for data
                    protection are implemented. The platform serves purely as an inspirational culinary showcase.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">5. Policy Updates</h2>
                <p className="text-gray-600">
                    While this is a non-commercial culinary demonstration, we may update this privacy policy to provide additional clarity about our
                    data practices. Any modifications will be clearly indicated with the revision date.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">6. Contact Information</h2>
                <p className="text-gray-600">
                    For questions regarding this Privacy Policy or our culinary concepts, please use the contact methods provided on this platform.
                    Note that no actual food orders can be placed through this demonstration site.
                </p>
            </section>
        </div>
    );
};

PrivacyPolicyPage.layout = (page) => <Layout children={page} />;

export default PrivacyPolicyPage;
