import { Module } from '@nestjs/common';
import { ConfigsModule } from './configs';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, ConfigsModule],
})
export class AppModule {}
