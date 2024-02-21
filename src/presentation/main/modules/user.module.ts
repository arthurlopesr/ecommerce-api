import { Module } from '@nestjs/common';
import { UserController } from 'src/presentation/controllers/user.controller';
import { UserService } from 'src/use-cases/services/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
