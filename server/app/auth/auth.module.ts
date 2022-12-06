import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'app/users/users.entity';
import { SessionSerializer } from './utils/serializer';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
