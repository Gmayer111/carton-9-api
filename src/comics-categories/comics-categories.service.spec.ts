import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ComicsCategoriesService } from './comics-categories.service';
import { ComicCategory } from './models/comic-category.models';

describe('ComicsCategoriesService', () => {
  let service: ComicsCategoriesService;
  let model: ComicCategory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComicsCategoriesService,
        {
          provide: getModelToken(ComicCategory),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findByPk: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ComicsCategoriesService>(ComicsCategoriesService);
    model = module.get(getModelToken(ComicCategory));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a comicCategory', async () => {
      const data = { categoryId: 1 };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all comicsCategories', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
