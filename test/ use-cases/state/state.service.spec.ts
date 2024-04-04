import { Test, TestingModule } from '@nestjs/testing';
import { StateEntity } from '../../../src/domain/entities/state.entity';
import { StateService } from '../../../src/use-cases/services/state/state.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { stateEntityMock } from '../../mocks/state.mock';

describe('StateServiceTest', () => {
  let service: StateService;
  let stateRepo: Repository<StateEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StateService,
        {
          provide: getRepositoryToken(StateEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([stateEntityMock]),
          },
        },
      ],
    }).compile();

    service = module.get<StateService>(StateService);
    stateRepo = module.get<Repository<StateEntity>>(
      getRepositoryToken(StateEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(stateRepo).toBeDefined();
  });

  it('should be return list of state in getAllState', async () => {
    const state = await service.getAllState();

    expect(state).toEqual([stateEntityMock]);
  });

  it('should return error in exception', () => {
    jest.spyOn(stateRepo, 'find').mockRejectedValue(new Error());

    expect(service.getAllState()).rejects.toThrow();
  });
});
