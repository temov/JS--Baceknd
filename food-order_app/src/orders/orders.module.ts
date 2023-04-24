import { Module } from "@nestjs/common/decorators";
import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';

@Module({
        providers:[OrderService],
        controllers:[OrdersController]

})

export class OrdersModule{}