import { Controller,Get,Post,Body,Param,Delete, UseGuards} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/interfaces/role.enum';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/auth/role-guard/roles-guard';



@Controller('products')
@UseGuards(JwtAuthGuard,RolesGuard)
export class ProductsController { 
    constructor(
    private readonly productService: ProductsService
    ) {}

   //localhost:3000/products
  @Get()
  @Roles(Role.ADMIN)
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
  @Roles(Role.ADMIN)
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
  @Roles(Role.ADMIN)
  async deleteOne(@Param('id') id: string) {
    await this.productService.deleteProduct(id);

    return {
      message: `Product with id: ${id} was deleted.`,
    };
  }

}
