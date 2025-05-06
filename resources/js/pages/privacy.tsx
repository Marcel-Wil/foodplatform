// PrivacyPolicyPage.tsx

import Layout from '@/layouts/main-layout';

const PrivacyPolicyPage = () => {
    return (
        <div className="mx-auto flex h-screen max-w-7xl flex-col justify-center px-4 py-10">
            <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">1. Overview</h2>
                <p className="text-gray-600">
                    This website is a proof of concept for showcasing models, modeling content, and fashion-related themes. It is not a commercial
                    product and does not collect, store, or share any personal data.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">2. No Data Collection</h2>
                <p className="text-gray-600">
                    We do not collect any personal information, browsing data, or analytics from users. No cookies, tracking technologies, or forms
                    that gather user input are present on this site.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">3. Third-Party Services</h2>
                <p className="text-gray-600">
                    This site does not use or integrate with any third-party services that collect user information. All images and content are static
                    and intended for demonstration only.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">4. Security</h2>
                <p className="text-gray-600">
                    Since we do not process or store user data, no additional security measures regarding data protection are necessary for this
                    website.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">5. Updates to This Policy</h2>
                <p className="text-gray-600">
                    Although this is a non-functional demo site, we may update this privacy policy to reflect clarifications. Any changes will be
                    clearly posted here.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-2 text-xl font-bold">6. Contact</h2>
                <p className="text-gray-600">
                    If you have any questions about this Privacy Policy, please reach out via the contact form or email listed on the site (if
                    applicable).
                </p>
            </section>
        </div>
    );
};

PrivacyPolicyPage.layout = (page) => <Layout children={page} />;

export default PrivacyPolicyPage;
