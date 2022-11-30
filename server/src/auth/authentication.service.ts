import { HttpException, HttpStatus } from '@nestjs/common';
import { encodePassword } from 'src/bcrypt/bcrypt';
import { CreateUserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

export class AuthenticationService {
  constructor(private readonly usersService: UsersService) {}

  public async registerUser(userData: CreateUserDto) {
    const hashedPassword = encodePassword(userData.password);
    try {
      const registeredUser = await this.usersService.createUser({
        ...userData,
        password: hashedPassword,
      });
      registeredUser.password = undefined;
      return registeredUser;
    } catch (error) {
      if (error?.code === 23505) {
        throw new HttpException(
          'User with the same email or login already exists.',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Something went wrong.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
