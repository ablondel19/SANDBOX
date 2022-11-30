/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.controller.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:28:13 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:28:14 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
