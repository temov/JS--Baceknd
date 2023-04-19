import { Injectable } from "@nestjs/common/decorators";

export interface Product{

    id:string,
    productName:string,
    productPrice:Number
}


export interface Order{

    id:string,
    date:Date,
    productsOrdered:Product[]
}

@Injectable()

export class OrderService{

    
        //creating hardcoded array of orders
    private readonly _orders:Order[]=[

        {
            id:'1',
            date:new Date(),
            productsOrdered:[
                {id:'1', productName:'Shoes',productPrice:100},
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
    ]

    getOrders():Order[] {

        return this._orders;
    }

}