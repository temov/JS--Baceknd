import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { OrderService } from './orders/orders.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [OrdersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
