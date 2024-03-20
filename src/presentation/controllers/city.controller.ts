import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from 'src/domain/entities/city.entity';
import { CityService } from 'src/use-cases/services/city/city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:stateId')
  async getAllCityByStateId(
    @Param('stateId') stateId: number,
  ): Promise<CityEntity[]> {
    return this.cityService.getAllCityByStateId(stateId);
  }
}
