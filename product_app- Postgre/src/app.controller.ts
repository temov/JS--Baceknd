import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ProductsService } from "./products/products.service";


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
