import { Test, TestingModule } from '@nestjs/testing';
import { PublishersController } from './publishers.controller';
import { PublishersService } from './publishers.service';

describe('PublishersController', () => {
  let controller: PublishersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublishersController],
      providers: [{ provide: PublishersService, useValue: jest.fn() }],
    }).compile();

    controller = module.get<PublishersController>(PublishersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
