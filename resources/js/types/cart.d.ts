import { FoodItem } from './menu';

interface CartItem {
    id: number;
    cart_id: number;
    food_item_id: number;
    quantity: number;
    created_at: string;
    updated_at: string;
    food_item: FoodItem;
}
