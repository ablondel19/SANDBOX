import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'app/users/users.dto';
import { User } from 'app/users/users.entity';
import { UserDetails } from 'app/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async validateUser(details: UserDetails) {
    const user = await this.usersRepository.findOneBy({ email: details.email });
    if (user) return user;
    const newUser = this.usersRepository.create(details);
    return this.usersRepository.save(newUser);
  }

  async createUser(userData: CreateUserDto) {
    const newSavedUser = this.usersRepository.create(userData);
    await this.usersRepository.save(newSavedUser);
    return newSavedUser;
  }

  async findUser(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }
}
