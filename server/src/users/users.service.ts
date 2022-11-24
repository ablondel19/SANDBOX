import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAllUsers(): Promise<Array<User>> {
    return this.usersRepository.find({});
  }

  addPhonyUser() {
    const savedUser = new User();
    savedUser.login = 'yeye';
    savedUser.email = 'yeye@yeye.com';
    savedUser.password = 'yeye';
    return this.usersRepository.save(savedUser);
  }
}

/*
public getMerguez() {
    return this.repository.createQueryBuilder("user")
    .select(['user.name', 'user.email'])
    .orderBy('user.name', 'ASC')
    .getMany();
}
*/
