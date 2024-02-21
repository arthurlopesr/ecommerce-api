import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../main/routes/dto/';
import { UserService } from 'src/use-cases/services/user/user.service';
import { User } from 'src/domain/interface/user/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
