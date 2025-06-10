interface DateTimeStrings {
    created_at: string;
    updated_at: string;
}

export interface FAQItem extends DateTimeStrings {
    id: number;
    question: string;
    answer: string;
    faq_category_id: number;
}

export interface FAQCategory extends DateTimeStrings {
    id: number;
    name: string;
    faqs: FAQItem[];
}
