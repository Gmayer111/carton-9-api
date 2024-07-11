import { Test, TestingModule } from '@nestjs/testing';
import { ComicsAuthorsController } from './comics-authors.controller';
import { ComicsAuthorsService } from './comics-authors.service';

describe('ComicsAuthorsController', () => {
  let controller: ComicsAuthorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComicsAuthorsController],
      providers: [{ provide: ComicsAuthorsService, useValue: jest.fn() }],
    }).compile();

    controller = module.get<ComicsAuthorsController>(ComicsAuthorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
