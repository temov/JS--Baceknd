
import { Injectable, NotFoundException } from '@nestjs/common';
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

        const foundOrder = this.orderRepository.findOne({

            where:{id:id},
            relations:['productsOrdered']
        });

        if (!foundOrder) {
            throw new NotFoundException(`Task with id: ${id} was not found.`);
          }

        return foundOrder;
    }

    async createOrder(OrderDto: OrderDto){

        const newOrder:Order = {

            ...OrderDto,
            id:uuid(),
            date:new Date(),
            
        }

        const createdNewOrder= this.orderRepository.create(newOrder);
        const savedOrder = await this.orderRepository.save(createdNewOrder);

        console.log(savedOrder)
        return newOrder.id;
    }

    async deleteOrder(id:string){

        const deletedElementOrder = await this.orderRepository.delete(id);
        return {
            message:`Order with id:${id} was deleted`
        }

    }

    async updateOrder(id:string,updateDto: UpdateDto){

        const updatedOrder:Order={

            id:id,
            ...updateDto,
            date:new Date(updateDto.date),
        };

        const order = await this.orderRepository.preload({
            id:id,
            ...updatedOrder,
        });
        if (!order) {
            throw new NotFoundException(
              `Order with id: ${id} was not found to update.`,
            );
          }
          await this.orderRepository.save(order);
      
          return order.id;
    }

}

