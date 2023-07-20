import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../core/entities';
import { UsersUseCases } from './users.use-case';
import {UsersController} from '../../controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersUseCases],
  controllers: [UsersController],
})
export class UsersModule {}