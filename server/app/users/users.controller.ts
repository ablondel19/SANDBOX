/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.controller.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:52 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/04 20:45:47 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Controller, Get } from '@nestjs/common';
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
}
