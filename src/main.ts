import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // security middleware
  app.enableCors();
  app.use(helmet());

  app.use(urlencoded({ extended: true }));

  await app.listen(3000);
}
bootstrap();
