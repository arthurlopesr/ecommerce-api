import { StateEntity } from 'src/domain/entities/state.entity';

export class ReturnStateDto {
  state_id: number;
  name: string;

  constructor(state: StateEntity) {
    this.state_id = state.state_id;
    this.name = state.name;
  }
}
