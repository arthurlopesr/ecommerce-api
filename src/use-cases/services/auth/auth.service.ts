import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../../../domain/entities/user.entity';
import { LoginDto } from '../../../presentation/main/routes/dto/login.dto';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { ReturnLoginDto } from '../../../presentation/main/routes/dto/returnLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDto } from '../../../presentation/main/routes/dto/returnUser.dto';
import { LoginPayloadDto } from '../../../presentation/main/routes/dto/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);
    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException('Email or password incorrect');
    }

    return {
      accessToken: this.jwtService.sign({ ...new LoginPayloadDto(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
