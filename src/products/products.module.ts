import { Module } from '@nestjs/common';
import { ProductsService } from './products.services';
import { photoProviders } from './products.providers';
import { ProductController } from './products.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductsService, ...photoProviders],
})
export class ProductsModule {}
