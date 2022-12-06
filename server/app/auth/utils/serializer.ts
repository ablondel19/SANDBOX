/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'app/users/users.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err: Error, user: User) => void) {
    console.log('serializeUser: ');
    console.log(user);
    done(null, user);
  }

  async deserializeUser(user: User, done: (err: Error, user: User) => void) {
    const fetchedUser = await this.authService.findUser(user.id);
    console.log('deserializeUser: ');
    console.log(fetchedUser);
    return user ? done(null, user) : done(null, null);
  }
}
