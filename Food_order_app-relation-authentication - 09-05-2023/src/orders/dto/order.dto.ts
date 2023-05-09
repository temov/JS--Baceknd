import { Product } from "src/interfaces/product.interface"
import {IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class OrderDto{
    @ApiProperty()
    id:string;
    @ApiProperty()
    date:Date;
    
   
    
}