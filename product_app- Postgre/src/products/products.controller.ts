import { Controller,Get,Post,Body,Req,Param ,HttpException, HttpStatus} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

interface IdRouteParams{

  id:string
}

@Controller('products')
export class ProductsController { 
    constructor(
    private readonly productService: ProductsService
    ) {}

   //localhost:3000/products
  @Get()
  getProducts() {

    const products = this.productService.getProduct();
    return products;
  }

  @Get(':id')
  getProductsById(
  @Req() request:Request,
  @Param() params:IdRouteParams) {

    const id:string = params.id
      const product = this.productService.getProductById(id);

      if (product === undefined){

        throw new HttpException(`Order with ${id} was not found`, HttpStatus.NOT_FOUND)
      }
      return product;
  }

  @Post()
  async createProduct(@Body() body: ProductDto) 
  {

    const id = await this.productService.createProduct(body);

    return {
      message: `Product was created`,
      id: id,
    };
  }

}
