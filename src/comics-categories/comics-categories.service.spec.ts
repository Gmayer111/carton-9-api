import { Test, TestingModule } from '@nestjs/testing';
import { ComicsCategoriesService } from './comics-categories.service';

describe('ComicsCategoriesService', () => {
  let service: ComicsCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComicsCategoriesService],
    }).compile();

    service = module.get<ComicsCategoriesService>(ComicsCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
