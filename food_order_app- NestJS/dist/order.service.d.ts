export interface Product {
    id: string;
    productName: string;
    productPrice: Number;
}
export interface Order {
    id: string;
    date: Date;
    productsOrdered: Product[];
}
export declare class OrderService {
    private readonly _orders;
    getOrders(): Order[];
}
