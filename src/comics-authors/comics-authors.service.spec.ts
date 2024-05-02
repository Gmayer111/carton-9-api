import { Test, TestingModule } from '@nestjs/testing';
import { ComicsAuthorsService } from './comics-authors.service';

describe('ComicsAuthorsService', () => {
  let service: ComicsAuthorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComicsAuthorsService],
    }).compile();

    service = module.get<ComicsAuthorsService>(ComicsAuthorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
