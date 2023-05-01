import { Order } from "src/interfaces/order.interface";
import { Product } from "src/interfaces/product.interface";
import { ProductEntity } from "src/products/entities/product.entity";
import { PrimaryColumn, Column, Entity, OneToMany } from "typeorm";



@Entity('orders')
export class OrderEntity implements Order{

@PrimaryColumn()
id:string;

@Column()
date:Date

@OneToMany(()=>ProductEntity,(productEntity)=>productEntity.order)
productsOrdered: Product[];

}

