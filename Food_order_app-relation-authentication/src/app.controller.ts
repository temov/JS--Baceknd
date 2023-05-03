import { Controller, Get, Post,Request, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { ProductsService } from "./products/products.service";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";


@Controller()
export class AppController {
  // orderService = new OrderService();
  constructor(
    private readonly appService: AppService,
    private readonly authservice:AuthService
    ) {}
//localhost:3000 - default route
  @Get() 
  getHello(): string {
    return this.appService.getHello();
  }
  //localhost:3000/auth/login
  // @UseGuards(AuthGuard('local'))
  @Post('auth/login') 
  async login(@Request() req){
      console.log(req.user);
      return this.authservice.login(req.user);
  }

  
}
