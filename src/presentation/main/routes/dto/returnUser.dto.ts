import { UserEntity } from 'src/domain/entities/user.entity';

export class ReturnUserDto {
  user_id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  constructor(userEntity: UserEntity) {
    this.user_id = userEntity.user_id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
  }
}
