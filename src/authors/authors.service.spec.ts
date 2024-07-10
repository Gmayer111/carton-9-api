import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.models';

describe('AuthorsService', () => {
  let service: AuthorsService;
  let model: Author;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthorsService,
        {
          provide: getModelToken(Author),
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

    service = module.get<AuthorsService>(AuthorsService);
    model = module.get(getModelToken(Author));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a author', async () => {
      const data = { userName: 'Hergé' };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all authors', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should find one author', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any);
      await service.findOne(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update one author', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any).mockResolvedValue({
        id: 1,
        update: jest.fn(),
      });
      await service.update(1, { userName: 'Hergé' });
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('destroy', () => {
    it('should destroy one author', async () => {
      const modelSpy = jest.spyOn(model, 'destroy' as any);
      await service.remove(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
