import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UserTokenDto } from './dto/user-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, pass: string): Promise<UserTokenDto> {
    const user = await this.userService.findOne(email);

    if (user?.passwordExist(pass) || !user.checkPassword(pass)) {
      return null;
    }

    const payload = { sub: user.id, email: user.email };
    return {
      role: user.role,
      access_token: this.jwtService.sign(payload),
    };
  }
}
