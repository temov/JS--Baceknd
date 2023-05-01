
import { Injectable } from '@nestjs/common';
import { Order } from '../interfaces/order.interface';
import { OrderDto } from './dto/order.dto';
import { UpdateDto } from './dto/update.dto';
import { v4 as uuid} from 'uuid';

@Injectable()

export class OrderService{

    
        //creating hardcoded array of orders
    private _orders:Order[]=[

        {
            id:'1',
            date:new Date(),
            productsOrdered:[
                {id:'1', productName:'Cheese Burger',productPrice:5},
                {id:'2', productName:'Bacon burger',productPrice:6},
            ]
        },
        {
            id:'2',
            date:new Date(),
            productsOrdered:[
                {id:'3', productName:'Chicken wings',productPrice:5},
                {id:'4', productName:'French fries',productPrice:2},
            ]
        },
        {
            id: '3',
            date: new Date(),
            productsOrdered: [
                {id: "5",productName: "Ice cream",productPrice: 2},
                {id: "6",productName: "Pizza",productPrice: 5}
            ]
        }
        
    ]

    getOrders() {

        return this._orders;
    }

    getOrdersById(id:string) {

        const findOrdersbyId = this._orders.find(order=>order.id === id);

        return findOrdersbyId;
    }

    createOrder(OrderDto: OrderDto){

        const newOrder:Order = {

            ...OrderDto,
            id:uuid(),
            date:new Date(OrderDto.date),

        }
            console.log(newOrder)
        this._orders.push(newOrder);
            console.log(1,this._orders)
        return newOrder.id;
    }

    deleteOrder(id:string){

        const deletedElementOrder = this._orders.find(order=>order.id !== id);

        return deletedElementOrder;
    }

    updateOrder(id:string,UpdateDto: UpdateDto){

        const updatedOrder= this._orders.map(order=>{
            
            if(order.id === id)
            return {

                ...order,
                ...UpdateDto
            }
            return order;
        });

    

        return updatedOrder;
    }

}

