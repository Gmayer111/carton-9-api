import { Test, TestingModule } from '@nestjs/testing';
import { ComicsCategoriesController } from './comics-categories.controller';
import { ComicsCategoriesService } from './comics-categories.service';

describe('ComicsCategoriesController', () => {
  let controller: ComicsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComicsCategoriesController],
      providers: [ComicsCategoriesService],
    }).compile();

    controller = module.get<ComicsCategoriesController>(ComicsCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
