import cookieParser = require('cookie-parser');

import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigKeys } from './config/config-keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());

  const configService = app.get(ConfigService);

  const port = configService.get<number>(ConfigKeys.PORT);

  await app.listen(port);
}

bootstrap();
