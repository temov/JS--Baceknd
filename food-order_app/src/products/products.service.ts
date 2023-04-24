import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {

    private readonly _products:Product[]=[

        {
            id:'1',
            productName:"shoes",
            productPrice:50
        },
        {
            id:'2',
            productName:"hats",
            productPrice:30
        },
        {
            id:'3',
            productName:"boots",
            productPrice:100
        }
    ]

    getProducts() {

        return this._products;
    }
}
