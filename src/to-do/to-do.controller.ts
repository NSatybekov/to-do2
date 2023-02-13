import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserLoginInterface } from 'src/auth/dto';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { ToDoDto, UpdateToDoDto } from './to-do.entity';
import { ToDoService } from './to-do.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiBearerAuth()
@ApiTags('to-do')
@Controller('to-do')
export class ToDoController {
    constructor(private readonly ToDoService: ToDoService ) {}


    @ApiOperation({ summary: 'Get To  Do List' })
    @UseGuards(JwtGuard)
    @Get()
    getList(@GetUser() user: UserLoginInterface){
        return this.ToDoService.findUsersToDos(user)
    }

    @ApiOperation({ summary: 'create To  Do List' })
    @UseGuards(JwtGuard)
    @Post()
    createList(@Body() toDoInfo: ToDoDto, @GetUser() user: UserLoginInterface){
        return this.ToDoService.createToDo(user, toDoInfo)
    }


    @ApiOperation({ summary: 'Update To  Do List' })
    @UseGuards(JwtGuard)
    @Put(':id')
    editToDo(@Body() toDoInfo: UpdateToDoDto, @GetUser() user: UserLoginInterface, @Param('id') id: number){
        return this.ToDoService.updateToDo(user, id, toDoInfo)
    }


    @ApiOperation({ summary: 'delete item from to  do list' })
    @UseGuards(JwtGuard) // working 
    @Delete(':id')
    deleteToDo(@GetUser() user: UserLoginInterface, @Param('id') id: number) {
        return this.ToDoService.deleteToDo(user, id)
    }

}
