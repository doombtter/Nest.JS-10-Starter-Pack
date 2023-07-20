import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './use-cases/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.development.env']
    }),
    TypeOrmModule.forRoot({
      type : "mysql",
      host : process.env.DB_HOST,
      port : parseInt(process.env.DB_PORT),
      username : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_DATABASE,
      autoLoadEntities : true,
      synchronize : true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
