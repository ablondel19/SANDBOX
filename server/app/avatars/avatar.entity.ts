/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   avatar.entity.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:28:01 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:28:02 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Avatar {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  filename: string;

  @Column({
    type: 'bytea',
  })
  data: Uint8Array;
}
