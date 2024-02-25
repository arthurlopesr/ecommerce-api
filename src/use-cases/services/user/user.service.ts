import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { UserEntity } from 'src/domain/interface/user/user.interface';
import { CreateUserDto } from 'src/presentation/main/routes/dto';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);
    const user: UserEntity = {
      ...createUserDto,
      password: passwordHashed,
      user_id: this.users.length + 1,
    };
    this.users.push(user);

    return user;
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.users;
  }
}
