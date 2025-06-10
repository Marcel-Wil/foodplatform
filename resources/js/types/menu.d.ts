interface DateTimeString {
    created_at: string;
    updated_at: string;
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
    manipulations: any[];
    custom_properties: any[];
    generated_conversions: any[];
    responsive_images: any[];
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
    [key: string]: any;
}
