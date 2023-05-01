
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "src/products/entities/product.entity";
import { OrderEntity } from "./entitites/order.entity";
import { OrderService } from "./orders.service";
import { ProductsService } from "src/products/products.service";
import { OrdersController } from "./orders.controller";
import { ProductsController } from "src/products/products.controller";
import { OrderMiddleware } from "./middleware/orders.middleware";


@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity])],
    providers: [OrderService, ProductsService],
    controllers: [OrdersController, ProductsController],
  })

  export class OrdersModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(OrderMiddleware).forRoutes('*');
    }
}