import { Module } from '@nestjs/common';
import { ToDoController } from './to-do.controller';
import { ToDoRepository } from './to-do.repository';
import { ToDoService } from './to-do.service';

@Module({
  controllers: [ToDoController],
  providers: [ToDoService, ToDoRepository]
})
export class ToDoModule {}
