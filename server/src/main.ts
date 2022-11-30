/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:28:31 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:28:32 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;

  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
