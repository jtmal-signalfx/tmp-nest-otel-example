import { NestFactory } from '@nestjs/core';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

import { AppModule } from './app.module';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
