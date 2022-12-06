import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login')
  @Redirect(
    'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-c34ae0b1c03cdeefc94a88fe13cbd8e7471708e3a9e1df1450dd9b6e56abfe81&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapp&response_type=code',
  ) // Use the config package in order to build this url //
  login() {
    console.log('GET app/auth/login');
    return;
  }

  @Get('redirect')
  redirect() {
    console.log('GET app/auth/redirect');
    return;
  }

  @Get('status')
  status() {
    console.log('GET app/auth/status');
    return;
  }

  @Get('logout')
  logout() {
    console.log('GET app/auth/logout');
    return;
  }
}
