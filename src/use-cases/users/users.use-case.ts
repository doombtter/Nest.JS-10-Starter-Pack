import { Injectable } from '@nestjs/common';
import { Users } from '../../core/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { CreateUserDto } from '../../core/dtos';

@Injectable()
export class UsersUseCases {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUsers(createUserDto: CreateUserDto) {
    await this.usersRepository.save(createUserDto);
  }
}