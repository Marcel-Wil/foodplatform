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
        $faq_categories = ['Ordering', 'Payments & Refunds', 'Delivery', 'Account & Security'];

        $faqs = [
            'Ordering' => [
                'How do I place an order?' => 'Simply browse the menu, add items to your cart, and proceed to checkout.',
                'Can I schedule an order for later?' => 'Yes, you can choose a delivery time during checkout.',
                'Can I customize my food order?' => 'Absolutely! Most items allow for customizations like spice level or add-ons.',
                'Is there a minimum order amount?' => 'Some restaurants may set a minimum order value, which is shown at checkout.',
                'Can I reorder my previous meals?' => 'Yes, your order history allows you to quickly reorder past meals.',
                'Do you offer contactless delivery?' => 'Yes, just select the contactless option at checkout.',
                'Can I cancel or change my order?' => 'Orders can be changed or canceled before the restaurant starts preparing it.',
            ],
            'Payments & Refunds' => [
                'What payment methods do you accept?' => 'We accept credit/debit cards, Apple Pay, Google Pay, and PayPal.',
                'Will I get a receipt after payment?' => 'Yes, a receipt is sent to your email and available in your account.',
                'Can I use promo codes or coupons?' => 'Yes, promo codes can be entered at checkout if available.',
                'How are refunds processed?' => 'Refunds are processed within 3–5 business days to your original payment method.',
                'Are there any extra service fees?' => 'A small service and delivery fee may apply depending on the order.',
                'Do you store my payment information?' => 'Only if you choose to save it, and it’s securely stored using encryption.',
            ],
            'Delivery' => [
                'How long does delivery take?' => 'Average delivery time is 30–45 minutes depending on the restaurant and location.',
                'How can I track my delivery?' => 'Real-time tracking is available in the app once your order is out for delivery.',
                'Do you deliver to my area?' => 'Enter your address to see available restaurants in your delivery zone.',
                'What if my delivery is late?' => 'You can contact support through the app, and we’ll follow up with the delivery partner.',
                'Can I tip the delivery driver?' => 'Yes, you can tip in-app during checkout or after delivery.',
                'What happens if my order is incorrect?' => 'Please report the issue through the app and we’ll resolve it promptly.',
                'Is delivery available 24/7?' => 'Delivery hours depend on restaurant availability in your area.',
            ],
            'Account & Security' => [
                'How do I create an account?' => 'Sign up with your email or use a social login (Google, Apple, etc.).',
                'I forgot my password. What should I do?' => 'Click "Forgot Password" on the login page to reset it.',
                'Can I update my delivery address?' => 'Yes, go to your profile settings to manage addresses.',
                'How do I delete my account?' => 'You can request deletion from account settings or contact support.',
                'Is my personal information safe?' => 'Yes, we use encryption and follow industry standards to protect your data.',
                'How do I enable notifications for order updates?' => 'Enable push or email notifications in your preferences.',
                'Can I log in on multiple devices?' => 'Yes, your account can be accessed from multiple devices securely.',
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