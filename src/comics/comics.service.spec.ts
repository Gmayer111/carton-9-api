import { Test, TestingModule } from '@nestjs/testing';
import { ComicsService } from './comics.service';
import { Comic } from './models/comic.models';
import { getModelToken } from '@nestjs/sequelize';

describe('ComicsService', () => {
  let service: ComicsService;
  let model: Comic;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComicsService,
        {
          provide: getModelToken(Comic),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ComicsService>(ComicsService);
    model = module.get(getModelToken(Comic));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a comic', async () => {
      const data = { title: 'Tintin' };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all comics', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should find one comic', async () => {
      const modelSpy = jest.spyOn(model, 'findOne' as any);
      await service.findOne(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update one comic', async () => {
      const modelSpy = jest.spyOn(model, 'findOne' as any).mockResolvedValue({
        id: 1,
        update: jest.fn(),
      });
      await service.update(1, { title: 'Tintin' });
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('destroy', () => {
    it('should destroy one comic', async () => {
      const modelSpy = jest.spyOn(model, 'destroy' as any);
      await service.remove(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
