import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly orderService;
    constructor(orderService: ProductsService);
    getOrders(): import("../interfaces/product.interface").Product[];
}
