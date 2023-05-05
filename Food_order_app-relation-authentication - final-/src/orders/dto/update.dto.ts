import { Product } from "src/interfaces/product.interface"
import {IsNotEmpty} from "class-validator";

export class UpdateDto{
    id:string;
    date:Date;
    @IsNotEmpty()
    productsOrdered:Product[];
}