import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { User } from 'src/domain/interface/user/user.interface';
import { CreateUserDto } from 'src/presentation/main/routes/dto';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);
    const user: User = {
      ...createUserDto,
      password: passwordHashed,
      user_id: this.users.length + 1,
    };
    this.users.push(user);

    return user;
  }

  async getAllUser(): Promise<User[]> {
    return this.users;
  }
}
