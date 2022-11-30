import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { Avatar } from '../avatars/avatar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Avatar])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
