/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.service.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:28:20 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:28:21 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
