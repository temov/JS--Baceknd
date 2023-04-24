import { Controller,Get, HttpCode, HttpException, HttpStatus, Param, Req,Body,Post,Delete, Put} from '@nestjs/common';
import { OrderService } from './orders.service';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { UpdateDto } from './dto/update.dto';
import { OrderDto } from './dto/order.dto';

interface IdRouteParams{

  id:string
}

//localhost:3000/orders 
@Controller('orders')
export class OrdersController {
    // orderService = new OrderService();
    constructor(
      private readonly orderService: OrderService
      ) {}
  
     //localhost:3000/orders 
    @Get()
    getOrders() {
  
      const orders = this.orderService.getOrders();
      console.log(orders)
      return orders;
    }
     //localhost:3000/orders/id
    @Get(':id')
    @HttpCode(202)
    getOrdersById(
      @Req() request:Request,
      @Param() params:IdRouteParams
      ) {
  
      const id:string = params.id
      const order = this.orderService.getOrdersById(id);

      if (order === undefined){

        throw new HttpException(`Order with ${id} was not found`, HttpStatus.NOT_FOUND)
      }
      return order;
    }

    @Post()
    createNewOrder(@Body() body:OrderDto){

      const id = this.orderService.createOrder(body)

      return {message:`New order with id:${id} was created`}

    }
    @Delete(':id')

    deletedOrderbyId( @Req() request:Request,
    @Param() params:IdRouteParams){

      const id:string = params.id
      const orderDeleted = this.orderService.deleteOrder(id);

      if (orderDeleted === undefined){

        throw new HttpException(`Order with ${id} was not found`, HttpStatus.NOT_FOUND)
      }

      return {message:`The order with id:${id} was deleted`}


    }

    @Put(':id')

    updatedOrderbyId(
    @Param() params:IdRouteParams,@Body() body:UpdateDto){

      const id:string = params.id
      const orderUpdated = this.orderService.updateOrder(id,body);

      if (orderUpdated === undefined){

        throw new HttpException(`Order with ${id} was not found`, HttpStatus.NOT_FOUND)
      }

      return {message:`The order with id:${id} was updated`}


    }
  }

