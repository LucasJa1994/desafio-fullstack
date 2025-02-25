import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/desafio-fullstack'),
    ProductsModule,
    CategoriesModule,
    OrdersModule,
  ],
})
export class AppModule {}
