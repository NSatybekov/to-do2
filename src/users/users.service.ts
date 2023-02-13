

import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { UserRepository } from './users.repository';
import { AuthDto } from 'src/auth/dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel() private readonly knex: Knex,
              private readonly repository: UserRepository) {}

  async findAll() : Promise<object> {
    const users = await this.repository.findAll();
    return { users };
  }

  async findOne(id: number) : Promise<object> {
    try{
      const user = await this.repository.findUser(id)
      const {hash, ...userWithoutHash} = user
      if(user.length === 0) {  // i have used user.length because db is always returning array, that is returning true if i check it like this - !user
        throw new NotFoundException(`User ${id} does not exist`)
      }
      return userWithoutHash
    }
    catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

}