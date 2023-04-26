import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { OrderService } from "./orders/orders.service";


@Controller()
export class AppController {
  // orderService = new OrderService();
  constructor(
    private readonly appService: AppService,
    ) {}
//localhost:3000 - default route
  @Get() 
  getHello(): string {
    return this.appService.getHello();
  }

}
