import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ToDoRepository } from './to-do.repository';
import { ToDoDto, ToDoInterface, UpdateToDoDto } from './to-do.entity';
import e from 'express';
import { UserLoginInterface } from 'src/auth/dto';

@Injectable()
export class ToDoService {
    constructor(private readonly repository: ToDoRepository) {}

    async findUsersToDos(user) {
        try{
            return this.repository.findUsersToDos(user.id)
        } catch(err) {
            throw new NotFoundException(err)
        }
    }

    async createToDo(user: UserLoginInterface, toDoInfo: ToDoDto): Promise<ToDoInterface>  { // i have deleted user login int because i got problems with it
        const toDoData = {
            user_id: user.id,
            to_do_title: toDoInfo.to_do_title,
            to_do_text: toDoInfo.to_do_text
        }
        try{
            const result = await this.repository.createToDo(toDoData)
            return result
        }
        catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
    }


    async updateToDo(user: UserLoginInterface, toDoId: number, toDoData: UpdateToDoDto){
        try{
            const result = await this.repository.updateToDo(user.id, toDoId, toDoData)

            if(result === true) {
                return 'To Do updated its not returning to do, so it will not make second request to DB'
            } else {
                throw new  HttpException('Info was not updated try again', HttpStatus.BAD_REQUEST)
            }
        } 
        catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
    }
    

    async deleteToDo(user, toDoId) {
        try{
            const result = await this.repository.deleteToDo(user.id, toDoId)

            if(result === true) {
                return 'To Do deleted'
            } else {
                throw new  HttpException('Info was not deleted try again', HttpStatus.BAD_REQUEST)
            }
        } 
        catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
    }
}
