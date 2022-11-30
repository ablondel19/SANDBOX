/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.service.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:25 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:27:26 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getAllUsers(): Promise<Array<User>> {
    return this.usersRepository.find({});
  }

  async clearUsers() {
    return this.usersRepository.clear();
  }

  async createUser(userData: CreateUserDto) {
    const newSavedUser = this.usersRepository.create(userData);
    await this.usersRepository.save(newSavedUser);
    return newSavedUser;
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
