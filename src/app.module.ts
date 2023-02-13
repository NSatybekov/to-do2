import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import {KnexModule} from 'nest-knexjs'
import { Knex } from 'knex';
import { UsersModule } from './users/users.module';
import { ToDoModule } from './to-do/to-do.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    KnexModule.forRoot({ // need to refacktor this shit
      config: {
        client: 'pg',
        version: '13',
        useNullAsDefault: true,
        connection: { 
          host: '127.0.0.1',
          user: 'postgres',
          password: '123',
          database: 'nest',
          port: 5434
        }
      }
    }),
    AuthModule, 
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ToDoModule,
    SwaggerModule
  ]
})
export class AppModule {}
