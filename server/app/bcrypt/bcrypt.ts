/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   bcrypt.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:56 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:27:57 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, SALT);
}

export function comparePasswords(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}
