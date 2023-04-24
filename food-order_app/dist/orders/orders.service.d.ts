import { Order } from '../interfaces/order.interface';
import { OrderDto } from './dto/order.dto';
import { UpdateDto } from './dto/update.dto';
export declare class OrderService {
    private _orders;
    getOrders(): Order[];
    getOrdersById(id: string): Order;
    createOrder(OrderDto: OrderDto): string;
    deleteOrder(id: string): Order;
    updateOrder(id: string, UpdateDto: UpdateDto): Order[];
}
