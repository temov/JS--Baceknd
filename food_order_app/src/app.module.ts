import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { OrderService } from './orders/orders.service';

@Module({
  imports: [OrdersModule],
  controllers: [AppController],
  providers: [AppService,OrderService],
})
export class AppModule {}
