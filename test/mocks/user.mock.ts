import { UserType } from '../../src/presentation/enum/user-type';
import { UserEntity } from '../../src/domain/entities/user.entity';

export const userEntityMock: UserEntity = {
  cpf: '123456789',
  created_at: new Date(),
  updated_at: new Date(),
  email: 'mock@mock.com.br',
  user_id: 1,
  name: 'Mock',
  password: 'mock',
  phone: '123456789',
  type: UserType.USER,
  addresses: [],
};
