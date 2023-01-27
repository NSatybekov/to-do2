import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { UserRepository } from 'src/users/users.repository';

@Module({
  providers: [MessageService, MessageRepository, UserRepository],
  controllers: [MessageController]
})
export class MessageModule {}
