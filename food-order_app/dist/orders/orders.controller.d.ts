import { OrderService } from './orders.service';
import { UpdateDto } from './dto/update.dto';
import { OrderDto } from './dto/order.dto';
interface IdRouteParams {
    id: string;
}
export declare class OrdersController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrders(): import("../interfaces/order.interface").Order[];
    getOrdersById(request: Request, params: IdRouteParams): import("../interfaces/order.interface").Order;
    createNewOrder(body: OrderDto): {
        message: string;
    };
    deletedOrderbyId(request: Request, params: IdRouteParams): {
        message: string;
    };
    updatedOrderbyId(params: IdRouteParams, body: UpdateDto): {
        message: string;
    };
}
export {};
