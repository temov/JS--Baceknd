import { Controller,Get, HttpCode, HttpException, HttpStatus, Param, Req,Body,Post,Delete, Put, UseGuards} from '@nestjs/common';
import { OrderService } from './orders.service';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { UpdateDto } from './dto/update.dto';
import { OrderDto } from './dto/order.dto';
import { MyGuardGuard } from './my-guard/my-guard.guard';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth/jwt-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/interfaces/role.enum';
import { RolesGuard } from 'src/common/auth/role-guard/roles-guard';

interface IdRouteParams{

  id:string
}

//localhost:3000/orders 
@Controller('orders')
// @UseGuards(MyGuardGuard)
@UseGuards(JwtAuthGuard,RolesGuard)
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
      // @Req() request:Request,
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
    @Roles(Role.ADMIN)
    async createNewOrder(@Body() body:OrderDto){

      const id = await this.orderService.createOrder(body)

      return {message:`New order with id:${id} was created`}

    }
    @Delete(':id')

    async deletedOrderbyId( 
      // @Req() request:Request,
    @Param() params:IdRouteParams){

      const id:string = params.id
      const orderDeleted = await this.orderService.deleteOrder(id);

      if (orderDeleted === undefined){

        throw new HttpException(`Order with ${id} was not found`, HttpStatus.NOT_FOUND)
      }

      return {message:`The order with id:${id} was deleted`}


    }

    @Put(':id')

    async updatedOrderbyId(
    @Param() params:IdRouteParams,@Body() body:UpdateDto){

      const id:string = params.id
      const orderUpdated = await this.orderService.updateOrder(id,body);

      if (orderUpdated === undefined){

        throw new HttpException(`Order with ${id} was not found`, HttpStatus.NOT_FOUND)
      }

      return {message:`The order with id:${id} was updated`}


    }
  }