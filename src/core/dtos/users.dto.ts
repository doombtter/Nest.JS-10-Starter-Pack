import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID' })
  userID: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'PASSWD' })
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
}
