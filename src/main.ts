import helmet from 'helmet';
import { urlencoded } from 'express';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { EnvironmentService } from './configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // security middleware
  app.enableCors();
  app.use(helmet());

  app.use(urlencoded({ extended: true }));

  await app.listen(EnvironmentService.getValue('PORT'));
}
bootstrap();
