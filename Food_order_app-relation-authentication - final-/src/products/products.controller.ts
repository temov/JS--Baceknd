import { Controller,Get,Post,Body,Param,Delete} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';



@Controller('products')
export class ProductsController { 
    constructor(
    private readonly productService: ProductsService
    ) {}

   //localhost:3000/products
  @Get()
 async  getProducts() {

    const products = await this.productService.getProduct();
    return products;
  }

   //localhost:3000/products/id

  @Get(':id')
  async getProductsById( @Param('id') id:string) {


      const product = await this.productService.getProductById(id);

    
      return product;
  }

  @Post(":orderId")
  async createProduct(@Body() body: ProductDto,@Param('orderId') orderId:string) 
  {

    const id = await this.productService.createProduct(body,orderId);

    console.log(id)

    return {
      message: `Product was created`,
      id: id,
    };
  }
  
  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    await this.productService.deleteProduct(id);

    return {
      message: `Product with id: ${id} was deleted.`,
    };
  }

}
