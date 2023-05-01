import {IsNotEmpty} from "class-validator";

export class ProductDto{

    id:string;
    productName:string;
    @IsNotEmpty()
    productPrice:Number
    
}