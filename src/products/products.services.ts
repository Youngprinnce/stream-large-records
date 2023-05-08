import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProductsAsStream(): Promise<NodeJS.ReadableStream> {
    const queryBuilder = this.productRepository.createQueryBuilder(); // Use TypeORM's query builder to create a stream of products
    const stream = queryBuilder.stream();
    return stream;
  }
}
