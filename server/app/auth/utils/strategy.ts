import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { AuthService } from '../auth.service';

@Injectable()
export class api42Strategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.API_42_CLIENT_ID,
      clientSecret: process.env.API_42_CLIENT_SECRET,
      callbackURL: process.env.API_42_CALLBACK_URL,
      scope: ['login', 'email'],
    });
  }
}
