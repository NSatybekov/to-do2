import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'


@ApiBearerAuth()
@ApiTags('/users')
@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @ApiOperation({ summary: 'Get users list' })
  // @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get info about 1 user' })
  // @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }
}