import { AddressEntity } from '../../src/domain/entities/address.entity';
import { cityEntityMock } from './city.mock';

export const addressMock: AddressEntity = {
  created_at: new Date(),
  address_id: 1,
  cep: '12121212',
  city_id: 1,
  complement: 'Any complement',
  number_address: 1,
  user_id: 1,
  city: cityEntityMock,
  updated_at: new Date(),
};
