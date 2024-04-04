import { StateEntity } from '../../src/domain/entities/state.entity';

export const stateEntityMock: StateEntity = {
  created_at: new Date(),
  name: 'Mock',
  state_id: 1,
  updated_at: new Date(),
  cities: [],
};
