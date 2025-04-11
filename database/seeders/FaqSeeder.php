<?php

namespace Database\Seeders;

use App\Models\Faq;
use App\Models\FaqCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faq_categories = ['General', 'Billing', 'Technical Support', 'Account Management'];
        $faqs = [
            'General' => [
                'What is your service about?' => 'We provide cloud-based solutions to help businesses manage their digital infrastructure efficiently.',
                'Where are you located?' => 'Our headquarters are in San Francisco, CA, but we operate globally.',
                'Do you offer customer support?' => 'Yes, our support team is available 24/7 via email and chat.',
                'Can I try your service before paying?' => 'Yes, we offer a 14-day free trial for all new users.',
                'Is there a mobile app available?' => 'Yes, our service is accessible via iOS and Android apps.',
                'What industries do you serve?' => 'We serve businesses across various industries including tech, finance, healthcare, and education.',
                'Is your platform secure?' => 'Absolutely. We use industry-standard encryption and data protection protocols.',
            ],
            'Billing' => [
                'What payment methods do you accept?' => 'We accept major credit cards, PayPal, and wire transfers.',
                'Do you offer refunds?' => 'Yes, we offer a 30-day money-back guarantee on all annual plans.',
                'Can I change my billing cycle?' => 'Yes, you can switch between monthly and annual billing in your account settings.',
                'How can I get an invoice?' => 'Invoices are emailed automatically and also available in your billing dashboard.',
                'Are there any hidden fees?' => 'No, we believe in transparent pricing with no hidden charges.',
                'Can I upgrade or downgrade my plan?' => 'Yes, you can change your plan at any time from your account dashboard.',
            ],
            'Technical Support' => [
                'How do I report a bug?' => 'You can report bugs via our support portal or by emailing support@example.com.',
                'What should I do if the site is down?' => 'Please check our status page first, then contact support if needed.',
                'Do you provide API access?' => 'Yes, we offer RESTful APIs with full documentation.',
                'Is there a developer sandbox environment?' => 'Yes, developers can request access to our sandbox environment for testing.',
                'How long does it take to resolve issues?' => 'Most technical issues are resolved within 24 hours.',
                'Do you support integrations with third-party apps?' => 'Yes, we integrate with tools like Slack, Zapier, and more.',
                'Can I get help with custom configurations?' => 'Yes, our technical team is available for enterprise clients needing custom setups.',
            ],
            'Account Management' => [
                'How do I reset my password?' => 'Click on "Forgot Password" on the login screen to reset your password.',
                'How can I delete my account?' => 'You can request account deletion from your settings or by contacting support.',
                'Can I have multiple users on one account?' => 'Yes, team accounts support multiple user roles and permissions.',
                'How do I update my profile information?' => 'Go to your account settings and click "Edit Profile".',
                'Is it possible to recover a deleted account?' => 'We can recover accounts deleted within 30 days upon request.',
                'How do I enable two-factor authentication?' => 'You can enable 2FA from your security settings using Google Authenticator or similar apps.',
                'What do I do if I suspect unauthorized access?' => 'Change your password immediately and contact our support team.',
            ],
        ];

        foreach ($faq_categories as $category) {
            //create FAQ category
            $faqCategory = FaqCategory::factory()->create([
                'name' => $category
            ]);
            //loop through questions and answers for that category
            foreach ($faqs[$category] as $question => $answer) {
                Faq::factory()->create([
                    'question' => $question,
                    'answer' => $answer,
                    'faq_category_id' => $faqCategory->id,
                ]);
            }
        }
    }
}