import { Product } from "src/interfaces/product.interface";
export declare class OrderDto {
    id: string;
    date: Date;
    productsOrdered: Product[];
}
