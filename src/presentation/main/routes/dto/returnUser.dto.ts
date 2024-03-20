import { UserEntity } from 'src/domain/entities/user.entity';
import { ReturnAddressDto } from './returnAddress.dto';

export class ReturnUserDto {
  user_id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  addresses?: ReturnAddressDto[];

  constructor(userEntity: UserEntity) {
    this.user_id = userEntity.user_id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
    this.addresses = userEntity.addresses
      ? userEntity.addresses.map((address) => new ReturnAddressDto(address))
      : undefined;
  }
}
