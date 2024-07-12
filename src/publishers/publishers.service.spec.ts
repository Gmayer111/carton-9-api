import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { PublishersService } from './publishers.service';
import { Publisher } from './models/publisher.models';

describe('PublishersService', () => {
  let service: PublishersService;
  let model: Publisher;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PublishersService,
        {
          provide: getModelToken(Publisher),
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

    service = module.get<PublishersService>(PublishersService);
    model = module.get(getModelToken(Publisher));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a publisher', async () => {
      const data = { name: 'Casterman' };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all publishers', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should find one publisher', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any);
      await service.findOne(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update one publisher', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any).mockResolvedValue({
        id: 1,
        update: jest.fn(),
      });
      await service.update(1, { name: 'Casterman' });
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('destroy', () => {
    it('should destroy one publisher', async () => {
      const modelSpy = jest.spyOn(model, 'destroy' as any);
      await service.remove(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
