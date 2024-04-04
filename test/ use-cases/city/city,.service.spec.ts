import { Repository } from 'typeorm';
import { CityService } from '../../../src/use-cases/services/city/city.service';
import { CityEntity } from '../../../src/domain/entities/city.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { cityEntityMock } from '../../../test/mocks/city.mock';
import { CacheService } from '../../../src/use-cases/services/cache/cache.service';

describe('CityServiceTest', () => {
  let service: CityService;
  let cityRepo: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue([cityEntityMock]),
          },
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(cityEntityMock),
            findOne: jest.fn().mockResolvedValue(cityEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepo = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepo).toBeDefined();
  });

  it('should be return findCityById', async () => {
    const city = await service.findCityById(cityEntityMock.city_id);

    expect(city).toEqual(cityEntityMock);
  });

  it('should be findCityById trows', async () => {
    jest.spyOn(cityRepo, 'findOne').mockRejectedValue(new Error());

    expect(service.findCityById(cityEntityMock.city_id)).rejects.toThrow();
  });

  it('should be return cities in getAllCityByStateId', async () => {
    const city = await service.getAllCityByStateId(cityEntityMock.city_id);

    expect(city).toEqual([cityEntityMock]);
  });
});
