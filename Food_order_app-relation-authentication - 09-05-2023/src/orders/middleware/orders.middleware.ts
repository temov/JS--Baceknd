import { Injectable } from "@nestjs/common";
import { NestMiddleware } from "@nestjs/common";
import { Request,Response } from "express";


@Injectable()
export class OrderMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function) {
        console.log('This is order middleware for order controller')


        next();
    }

    
}