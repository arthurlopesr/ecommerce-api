import { CityEntity } from '../../src/domain/entities/city.entity';
import { stateEntityMock } from '../mocks/state.mock';

export const cityEntityMock: CityEntity = {
  city_id: 1,
  createdAt: new Date(),
  name: 'Mock',
  stateId: 1,
  updatedAt: new Date(),
  addresses: [],
  state: stateEntityMock,
};
