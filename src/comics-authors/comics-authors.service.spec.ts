import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { ComicsAuthorsService } from './comics-authors.service';
import { ComicAuthor } from './models/comic-author.model';

describe('ComicsAuthorsService', () => {
  let service: ComicsAuthorsService;
  let model: ComicAuthor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComicsAuthorsService,
        {
          provide: getModelToken(ComicAuthor),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findByPk: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ComicsAuthorsService>(ComicsAuthorsService);
    model = module.get(getModelToken(ComicAuthor));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a comicAuthor', async () => {
      const data = { authorId: 1 };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all comicsAuthors', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
