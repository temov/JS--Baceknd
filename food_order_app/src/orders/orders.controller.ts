import { Controller,Get} from '@nestjs/common';
import { OrderService } from './orders.service';

@Controller('orders')

export class OrdersController {
    // orderService = new OrderService();
    constructor(
      private readonly orderService: OrderService
      ) {}
  
     //localhost:3000/orders 
    @Get("/orders")
    getOrders() {
  
      const orders = this.orderService.getOrders();
      return orders;
    }
  }

