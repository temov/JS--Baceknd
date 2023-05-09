import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);
   app.useGlobalFilters(new HttpExceptionFilter());

   const swaggerConfig = new DocumentBuilder()
   .setTitle('Food-order_app')
   .setDescription('We are writing code for Food-order_app')
   .setVersion('1.0')
   .build();

   const document  = SwaggerModule.createDocument(app, swaggerConfig);
   SwaggerModule.setup('api-docs',app, document)
  await app.listen(3000);
}
bootstrap();
