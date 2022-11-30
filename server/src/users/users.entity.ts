/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.entity.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:44 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:27:45 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Avatar } from '../avatars/avatar.entity';
import { MatchHistoryDto } from './users.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @JoinColumn({ name: 'avatarId' })
  @OneToOne(() => Avatar, {
    nullable: true,
  })
  avatar?: Avatar;

  @Column({ nullable: true })
  avatarId?: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  login: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ type: 'json', array: false, default: () => "'[]'" })
  public matchHistory: Array<MatchHistoryDto>;
}
