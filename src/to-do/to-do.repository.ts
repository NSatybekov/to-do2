import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { UserLoginInterface } from 'src/auth/dto';
import { ToDoInterface, UpdateToDoDto } from './to-do.entity';

@Injectable()
export class ToDoRepository {
    private readonly TABLE_NAME = 'to_do'
    constructor(@InjectModel() private readonly db: Knex) {}

    async findUsersToDos(userId) {
        const list = await this.db.table(this.TABLE_NAME).where('user_id', userId)
        return list
    }

    async createToDo(data) : Promise<ToDoInterface> {
        const result = await this.db.table(this.TABLE_NAME)
                                    .insert(data)
                                    .returning(['to_do_id', 'user_id', 'to_do_title', 'to_do_text'])

            return result[0]
    }

    async updateToDo(userId: number, toDoId: number, data: UpdateToDoDto): Promise<boolean> {
        const result = await this.db.table(this.TABLE_NAME)
                                    .where({user_id: userId, to_do_id: toDoId})
                                    .update(data)
                if (result > 0) { 
                    return true; 
                } 
                else {
                    return false;
                }
    }

    async deleteToDo(userId: number, toDoId: number): Promise<boolean> {
        const result = await this.db.table(this.TABLE_NAME)
                                    .where({user_id: userId, to_do_id: toDoId})
                                    .delete()
                if (result > 0) {  // knex delete return number fields that was deleted if it has deleted somethind return true 
                    return true; // or should i make this checking in service?
                } else {
                    return false;
                }
    }
}