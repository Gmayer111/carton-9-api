import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { CollectionsService } from './collections.service';
import { Collection } from './models/collection.models';

describe('CollectionsService', () => {
  let service: CollectionsService;
  let model: Collection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CollectionsService,
        {
          provide: getModelToken(Collection),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            findByPk: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CollectionsService>(CollectionsService);
    model = module.get(getModelToken(Collection));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a collection', async () => {
      const data = { name: 'Collection Tintin' };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all collections', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should find one collection', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any);
      await service.findOne(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update one collection', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any).mockResolvedValue({
        id: 1,
        update: jest.fn(),
      });
      await service.update(1, { name: 'Collection Tintin' });
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('destroy', () => {
    it('should destroy one collection', async () => {
      const modelSpy = jest.spyOn(model, 'destroy' as any);
      await service.remove(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
