import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: { signIn: jest.fn() },
        },
      ],
    }).compile();

    controller = moduleRef.get<AuthController>(AuthController);
    service = moduleRef.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('signIn', () => {
    it('should signin app', async () => {
      const serviceSpy = jest.spyOn(service, 'signIn');

      await controller.signIn({
        email: 'test@test.com',
        password: 'test',
      });

      expect(serviceSpy).toHaveBeenCalledTimes(1);
    });
  });
});
