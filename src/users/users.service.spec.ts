import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { getModelToken } from '@nestjs/sequelize';

describe('UserService', () => {
  let service: UsersService;
  let model: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findByPk: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get(getModelToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const data = { firstname: 'Tintin' };
      const modelSpy = jest.spyOn(model, 'create' as any);
      await service.create(data as any);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all users', async () => {
      const modelSpy = jest.spyOn(model, 'findAll' as any);
      await service.findAll();
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should find one user', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any);
      await service.findOne(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('findByEmail', () => {
    it('should find one user by email', async () => {
      const modelSpy = jest.spyOn(model, 'findOne' as any);
      await service.findByEmail('test@mail.fr');
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update one user', async () => {
      const modelSpy = jest.spyOn(model, 'findByPk' as any).mockResolvedValue({
        id: 1,
        update: jest.fn(),
      });
      await service.update(1, { firstName: 'Tintin' });
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('destroy', () => {
    it('should destroy one user', async () => {
      const modelSpy = jest.spyOn(model, 'destroy' as any);
      await service.remove(1);
      expect(modelSpy).toHaveBeenCalledTimes(1);
    });
  });
});
