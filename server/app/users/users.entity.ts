/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.entity.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:44 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/06 16:14:50 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
/*
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
  displayName: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ type: 'json', array: false, default: () => "'[]'" })
  public matchHistory: Array<MatchHistoryDto>;
}
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  
  @Column()
  displayName: string;
  
  @Column()
  email: string;
}
*/
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column({ unique: true })
  public email: string;
  @Column()
  public name: string;
  @Column()
  public password: string;
}
