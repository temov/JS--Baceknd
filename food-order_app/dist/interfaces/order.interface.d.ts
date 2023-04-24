import { Product } from "./product.interface";
export interface Order {
    id: string;
    date: Date;
    productsOrdered: Product[];
}
