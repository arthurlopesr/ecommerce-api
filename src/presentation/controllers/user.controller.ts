import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../main/routes/dto/';
import { UserService } from 'src/use-cases/services/user/user.service';
import { UserEntity } from 'src/domain/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser(): Promise<UserEntity[]> {
    return this.userService.getAllUser();
  }
}
