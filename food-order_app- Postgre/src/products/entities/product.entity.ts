import { Product } from "src/interfaces/product.interface";
import { PrimaryColumn, Column, Entity } from "typeorm";



@Entity('products')
export class ProductEntity implements Product{

@PrimaryColumn()
id:string;

@Column()
productName:string

@Column()
productPrice:Number

}