import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductEntity } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/products/dto/product.dto';
import { v4 as uuid} from 'uuid';
import { OrderEntity } from 'src/orders/entitites/order.entity';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository:Repository<ProductEntity>,
        @InjectRepository(OrderEntity)
        private readonly orderRepository:Repository<OrderEntity>
    ){}

    private readonly _products:Product[]=[

        {
            id:'1',
            productName:"Double burger",
            productPrice:5
        },
        {
            id:'2',
            productName:"hot dog",
            productPrice:3
        },
        {
            id:'3',
            productName:"bacon burger",
            productPrice:4
        }
    ]

    getProduct():Promise<ProductEntity[]> {

        return this.productRepository.find({ relations: ['order'] });
    }

    async getProductById(id:string):Promise<ProductEntity> {

        const findProduct = await this.productRepository.findOneBy({id:id});

        return findProduct;
    }

    async createProduct(productDto:ProductDto,orderId:string):Promise<string> {

           const order = await this.orderRepository.findOneBy({ id: orderId });
       
           const createdProduct = this.productRepository.create({
            id: uuid(),
           ...productDto,

           order:order,
           
        })

        const productSaved = await this.productRepository.save(createdProduct);

        return productSaved.id;
    }

     // Remove product
  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }
}
