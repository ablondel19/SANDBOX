/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.dto.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ablondel <ablondel@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 00:27:48 by ablondel          #+#    #+#             */
/*   Updated: 2022/12/01 00:27:49 by ablondel         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export class CreateUserDto {
  login: string;
  email: string;
  password: string;
}

export class MatchHistoryDto {
  public opponent: string;
  public map: string;
  public personnalScore: number;
  public opponentScore: number;
}
