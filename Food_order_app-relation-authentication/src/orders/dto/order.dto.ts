import { Product } from "src/interfaces/product.interface"
import {IsNotEmpty} from "class-validator";

export class OrderDto{

    id:string;
    date:Date;
    @IsNotEmpty()
    productsOrdered:Product[];
}