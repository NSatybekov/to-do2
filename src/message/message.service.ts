import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { UserLoginInterface } from 'src/auth/dto';
import { MessageDto, MessageInterface } from './message.entity';
import { UserRepository } from 'src/users/users.repository';


@Injectable()
export class MessageService {
    constructor(private messageRepository: MessageRepository, private readonly userRepository: UserRepository) {}

    async sendMessage(user: UserLoginInterface, message: MessageDto) { 
        const messageData: MessageInterface = {
            message_text: message.message_text,
            from_email: user.email
        }
        const result = await this.messageRepository.createMessage(messageData)
        return result
    }
}
