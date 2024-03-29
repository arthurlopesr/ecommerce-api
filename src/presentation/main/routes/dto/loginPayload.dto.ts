import { UserEntity } from 'src/domain/entities/user.entity';

export class LoginPayloadDto {
  userId: number;
  userType: string;

  constructor(user: UserEntity) {
    this.userId = user.user_id;
    this.userType = user.type;
  }
}
