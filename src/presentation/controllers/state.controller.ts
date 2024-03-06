import { Controller, Get } from '@nestjs/common';
import { StateEntity } from 'src/domain/entities/state.entity';

import { StateService } from 'src/use-cases/services/state/state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getAllState(): Promise<StateEntity[]> {
    return this.stateService.getAllState();
  }
}
