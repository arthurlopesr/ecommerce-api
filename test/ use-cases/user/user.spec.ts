import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../../src/use-cases/services/user/user.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../src/domain/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userEntityMock } from '../../mocks/user.mock';
import { createUserMock } from '../../mocks/createUserMock';

describe('UserServiceTest', () => {
  let service: UserService;
  let userRepo: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(userEntityMock),
            save: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepo = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepo).toBeDefined();
  });

  it('should return error if user exist', () => {
    expect(service.createUser(createUserMock)).rejects.toThrow();
  });

  it('should return user if not exist', async () => {
    jest.spyOn(userRepo, 'findOne').mockResolvedValue(undefined);

    const user = await service.createUser(createUserMock);
    expect(user).toEqual(userEntityMock);
  });

  it('should return user in findUserById', () => {
    const user = service.findUserById(userEntityMock.user_id);
    expect(user).resolves.toEqual(userEntityMock);
  });

  it('should return error on use findUserById', () => {
    jest.spyOn(userRepo, 'findOne').mockResolvedValue(undefined);
    expect(service.findUserById(userEntityMock.user_id)).rejects.toThrow();
  });

  it('should not call findUserById trows', () => {
    jest.spyOn(userRepo, 'findOne').mockRejectedValue(new Error());
    expect(service.findUserById(userEntityMock.user_id)).rejects.toThrow();
  });

  it('should return user in findUserByEmail', () => {
    const user = service.findUserByEmail(userEntityMock.email);
    expect(user).resolves.toEqual(userEntityMock);
  });

  it('should return error in findUserByEmail', () => {
    jest.spyOn(userRepo, 'findOne').mockResolvedValue(undefined);
    expect(service.findUserByEmail(userEntityMock.email)).rejects.toThrow();
  });

  it('should not call findUserByEmail trows', () => {
    jest.spyOn(userRepo, 'findOne').mockRejectedValue(new Error());
    expect(service.findUserByEmail(userEntityMock.email)).rejects.toThrow();
  });

  it('should return user in getUserByIdUsingRelations', () => {
    const user = service.getUserByIdUsingRelations(userEntityMock.user_id);
    expect(user).resolves.toEqual(userEntityMock);
  });
});
