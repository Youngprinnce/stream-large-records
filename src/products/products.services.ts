import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: Repository<Product>, // Use `readonly` keyword to make `productRepository` immutable
  ) {}

  async getProductsAsStream(): Promise<NodeJS.ReadableStream> {
    // Use TypeORM's query builder to create a stream of products
    const stream = this.productRepository
      .createQueryBuilder()
      .select()
      .stream();
    return stream;
  }
}
