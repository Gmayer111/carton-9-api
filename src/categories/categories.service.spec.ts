import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { CategoriesService } from './categories.service';
import { Category } from './models/category.models';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let model: Category;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getModelToken(Category),
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

    service = module.get<CategoriesService>(CategoriesService);
    model = module.get(getModelToken(Category));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a category', async () => {
      const data = { label: 'Science Fiction' };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all category', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should find one category', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any);
      await service.findOne(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update one category', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any).mockResolvedValue({
        id: 1,
        update: jest.fn(),
      });
      await service.update(1, { label: 'Science Fiction' });
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('destroy', () => {
    it('should destroy one category', async () => {
      const modelSpy = jest.spyOn(model, 'destroy' as any);
      await service.remove(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
