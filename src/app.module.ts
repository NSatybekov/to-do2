import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import {KnexModule} from 'nest-knexjs'
import { Knex } from 'knex';
import { UsersModule } from './users/users.module';
import { ToDoModule } from './to-do/to-do.module';
import { SwaggerModule } from '@nestjs/swagger';
import { knexConfig} from './config/knex.config'

@Module({
  imports: [
    KnexModule.forRoot(knexConfig),
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
