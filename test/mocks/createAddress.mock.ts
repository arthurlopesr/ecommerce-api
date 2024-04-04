import { CreateAddressDto } from '../../src/presentation/main/routes/dto/createAddress.dto';
import { addressMock } from '../../test/mocks/address.mock';
import { cityEntityMock } from '../../test/mocks/city.mock';

export const createAddressMock: CreateAddressDto = {
  cep: addressMock.cep,
  city_id: cityEntityMock.city_id,
  complement: addressMock.complement,
  number_address: addressMock.number_address,
};
