import { OrderService } from './orders.service';
export declare class OrdersController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrders(): import("../interfaces/order.interface").Order[];
}
