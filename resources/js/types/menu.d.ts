interface DateTimeString {
    created_at: string;
    updated_at: string;
}

interface Manipulations {
    [conversionName: string]: {
        width?: number;
        height?: number;
        crop?: string;
        fit?: string;
        [key: string]: unknown;
    };
}

interface ResponsiveImages {
    [conversionName: string]: {
        urls: string[];
        srcset: string;
        base64svg?: string;
        [key: string]: unknown;
    };
}

interface GeneratedConversions {
    [conversionName: string]: boolean;
}
interface CustomProperties {
    alt?: string;
    caption?: string;
    responsive?: boolean;
    [key: string]: unknown;
}
interface MediaItem extends DateTimeString {
    id: number;
    model_type: string;
    model_id: number;
    uuid: string;
    collection_name: string;
    name: string;
    file_name: string;
    mime_type: string;
    disk: string;
    conversions_disk: string;
    size: number;
    manipulations: Manipulations;
    custom_properties: CustomProperties;
    generated_conversions: GeneratedConversions;
    responsive_images: ResponsiveImages;
    order_column: number;
    original_url: string;
    preview_url: string | null;
}

interface FoodCategory extends DateTimeString {
    id: number;
    name: string;
    slug: string;
}

export interface FoodItem extends DateTimeString {
    id: number;
    name: string;
    description: string;
    price: number;
    restaurant_id: number;
    food_category_id: number;
    is_available: number;
    picture: string;
    food_category: FoodCategory;
    media: MediaItem[];
}
