import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AddressService } from '../../../src/use-cases/services/address/address.service';
import { AddressEntity } from '../../../src/domain/entities/address.entity';
import { addressMock } from '../../../test/mocks/address.mock';
import { UserService } from '../../../src/use-cases/services/user/user.service';
import { CityService } from '../../../src/use-cases/services/city/city.service';
import { userEntityMock } from '../../../test/mocks/user.mock';
import { cityEntityMock } from '../../../test/mocks/city.mock';
import { createAddressMock } from '../../../test/mocks/createAddress.mock';

describe('AddressServiceTest', () => {
  let service: AddressService;
  let userService: UserService;
  let cityService: CityService;
  let stateRepo: Repository<AddressEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(addressMock),
          },
        },
        {
          provide: UserService,
          useValue: {
            findUserById: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
        {
          provide: CityService,
          useValue: {
            findCityById: jest.fn().mockResolvedValue(cityEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<AddressService>(AddressService);
    userService = module.get<UserService>(UserService);
    cityService = module.get<CityService>(CityService);
    stateRepo = module.get<Repository<AddressEntity>>(
      getRepositoryToken(AddressEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
    expect(cityService).toBeDefined();
    expect(stateRepo).toBeDefined();
  });

  it('should return address after save', async () => {
    const address = await service.createAddress(
      createAddressMock,
      userEntityMock.user_id,
    );

    expect(address).toEqual(addressMock);
  });

  it('should be UserService trows', async () => {
    jest.spyOn(userService, 'findUserById').mockRejectedValue(new Error());

    expect(
      service.createAddress(createAddressMock, userEntityMock.user_id),
    ).rejects.toThrow();
  });

  it('should be CityService trows', async () => {
    jest.spyOn(cityService, 'findCityById').mockRejectedValue(new Error());

    expect(
      service.createAddress(createAddressMock, userEntityMock.user_id),
    ).rejects.toThrow();
  });
});
