import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from 'src/domain/entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async getAllCityByStateId(stateId: number): Promise<CityEntity[]> {
    const citiesCached: CityEntity[] = await this.cacheManager.get(
      `states_${stateId}`,
    );

    if (citiesCached) {
      return citiesCached;
    }

    const cities = await this.cityRepository.find({ where: { stateId } });

    await this.cacheManager.set(`states_${stateId}`, cities);

    return cities;
  }
}
