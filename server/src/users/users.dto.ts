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
