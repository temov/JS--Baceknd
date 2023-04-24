import { AppService } from "./app.service";
import { OrderService } from "./orders/orders.service";
export declare class AppController {
    private readonly appService;
    private readonly orderService;
    constructor(appService: AppService, orderService: OrderService);
    getHello(): string;
    getOrders(): import("./interfaces/order.interface").Order[];
}
