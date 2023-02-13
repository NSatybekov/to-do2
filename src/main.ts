import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
            const config = new DocumentBuilder()
            .setTitle('To Do list')
            .setDescription('You can create update and delete to dos')
            .setVersion('1.0')
            .addTag('list')
            .addBearerAuth()
            .build();
                  const document = SwaggerModule.createDocument(app, config);
                  SwaggerModule.setup('api', app, document);

   await app.listen(3000);
}
bootstrap();
