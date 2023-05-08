import { Response } from 'express';
import { ProductsService } from './products.services';
import { MyTransform } from 'src/util/transform.util';
import { Controller, Get, Res } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(@Res() res: Response): Promise<void> {
    try {
      const transformData = new MyTransform({ objectMode: true });

      const productStream = await this.productsService.getProductsAsStream();
      productStream.pipe(transformData);

      // Use the `write` method with the `end` option instead of manually calling `end` later
      transformData.pipe(res, { end: true });
    } catch (error) {
      // Handle the error appropriately
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
