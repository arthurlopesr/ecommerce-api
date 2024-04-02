import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from '../../../domain/entities/city.entity';
import { Repository } from 'typeorm';
import { CacheService } from '../cache/cache.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly cacheService: CacheService,
  ) {}

  async getAllCityByStateId(stateId: number): Promise<CityEntity[]> {
    return this.cacheService.getCache<CityEntity[]>(
      `states_${stateId}`,
      async () => {
        return await this.cityRepository.find({
          where: {
            stateId,
          },
        });
      },
    );
  }

  async findCityById(cityId: number): Promise<CityEntity> {
    const city = await this.cityRepository.findOne({
      where: {
        city_id: cityId,
      },
    });

    if (!city) {
      throw new NotFoundException('City not found');
    }

    return city;
  }
}
