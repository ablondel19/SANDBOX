/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:28:31 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/06 16:31:23 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('app');
  const port = process.env.PORT;
  await app.listen(port);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
