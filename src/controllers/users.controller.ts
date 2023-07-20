import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos';
import { UsersUseCases } from '../use-cases/users/users.use-case';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('USER API')
export class UsersController {
    constructor(private usersUseCases: UsersUseCases) {}

    @Post('api/user')
    @ApiOperation({ summary: 'Create User API', description: 'Create User' })
    @ApiCreatedResponse({ description: 'Create User'})
    async createUsers(@Body() user: CreateUserDto) {
      if(user.userID == null || user.password == null)
      {
        return {"result" : 1001}
      }else{
        await this.usersUseCases.createUsers(user);
        return {"result" : 1000};
      }
    }
}