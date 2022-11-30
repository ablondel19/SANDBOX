/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.controller.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:52 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:27:53 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<Array<User>> {
    return this.usersService.getAllUsers();
  }

  @Get('clear')
  clearUsers() {
    return this.usersService.clearUsers();
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
