import { Controller,Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController { 
    constructor(
    private readonly orderService: ProductsService
    ) {}

   //localhost:3000/products
  @Get()
  getOrders() {

    const orders = this.orderService.getProducts();
    return orders;
  }}
