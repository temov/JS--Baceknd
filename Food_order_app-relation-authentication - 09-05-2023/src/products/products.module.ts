import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/products/entities/product.entity';
import { OrderEntity } from 'src/orders/entitites/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity,OrderEntity])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
