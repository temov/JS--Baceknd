import { Injectable } from '@nestjs/common';
import { Order } from '../interfaces/order.interface';

@Injectable()

export class OrderService{

    
        //creating hardcoded array of orders
    private readonly _orders:Order[]=[

        {
            id:'1',
            date:new Date(),
            productsOrdered:[
                {id:'1', productName:'Jeans',productPrice:100},
                {id:'2', productName:'Shirts',productPrice:50},
            ]
        },
        {
            id:'2',
            date:new Date(),
            productsOrdered:[
                {id:'3', productName:'Slippers',productPrice:20},
                {id:'4', productName:'belts',productPrice:50},
            ]
        },
        {
            id:'3',
            date:new Date(),
            productsOrdered:[
                {id:'5', productName:'Shoes',productPrice:20},
                {id:'6', productName:'Helmets',productPrice:50},
            ]
        }
    ]

    getOrders():Order[] {

        return this._orders;
    }

}
