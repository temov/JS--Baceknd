import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductEntity } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/products/dto/product.dto';
import { v4 as uuid} from 'uuid';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository:Repository<ProductEntity>
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

    getProduct() {

        return this.productRepository.find();
    }

    async getProductById(id:string) {

        const findProductbyId = await this.productRepository.findOneBy({id:id});

        return findProductbyId;
    }

    async createProduct(productDto:ProductDto) {

        const newProduct:Product = {
            id: uuid(),
            productPrice: productDto.productPrice,
            productName: productDto.productName
        }

        const objectOfProductEntity = this.productRepository.create(newProduct);
        const productSaved = await this.productRepository.save(objectOfProductEntity);
        console.log(productSaved)

        return newProduct.id;
    }
}
