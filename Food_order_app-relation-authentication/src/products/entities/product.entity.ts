import { Product } from "src/interfaces/product.interface";
import { OrderEntity} from "src/orders/entitites/order.entity";
import { PrimaryColumn, Column, Entity, ManyToOne } from "typeorm";



@Entity('products')
export class ProductEntity implements Product{

@PrimaryColumn()
id:string;

@Column()
productName:string

@Column()
productPrice:Number

@ManyToOne(()=>OrderEntity, (orderEntity)=>orderEntity.productsOrdered,{onDelete:'CASCADE'})
 order:OrderEntity

}