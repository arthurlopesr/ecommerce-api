import { CityEntity } from '../../../../domain/entities/city.entity';
import { ReturnStateDto } from './returnState.dto';

export class ReturnCityDto {
  city_id: number;
  name: string;
  state: ReturnStateDto;

  constructor(city: CityEntity) {
    this.city_id = city.city_id;
    this.name = city.name;
    this.state = city.state ? new ReturnStateDto(city.state) : undefined;
  }
}
