
import { Injectable } from '@nestjs/common';
import { Order } from '../interfaces/order.interface';
import { OrderDto } from './dto/order.dto';
import { UpdateDto } from './dto/update.dto';
import { v4 as uuid} from 'uuid';
import { OrderEntity } from './entitites/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()

export class OrderService{

    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
      ) {}
    
        //creating hardcoded array of orders
    private _orders:Order[]=[

        {
            id:'1',
            date:new Date(),
            
        
            
        },
        {
            id:'2',
            date:new Date(),
            
            
        },
        {
            id: '3',
            date: new Date(),
           
        }
            
        
    ]

    getOrders() {

        return this.orderRepository.find({
            relations: ['productsOrdered'],
          });
    }

    //I'm here for changes

    getOrdersById(id:string) {

        const findOrdersbyId = this._orders.find(order=>order.id === id);

        return findOrdersbyId;
    }

    async createOrder(OrderDto: OrderDto){

        const newOrder:Order = {

            ...OrderDto,
            id:uuid(),
            date:new Date(OrderDto.date),
            
            

        }
        const createdNewProduct= this.orderRepository.create(newOrder);
        const savedProduct = await this.orderRepository.save(createdNewProduct);

        console.log(savedProduct)
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

