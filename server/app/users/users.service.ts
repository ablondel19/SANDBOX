/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.service.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:25 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/04 20:44:38 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

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

  async clearUsers() {
    return this.usersRepository.clear();
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
