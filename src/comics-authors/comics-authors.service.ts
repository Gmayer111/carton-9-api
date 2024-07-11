import { Injectable } from '@nestjs/common';
import { CreateComicsAuthorDto } from './dto/create-comics-author.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ComicAuthor } from './models/comic-author.model';

@Injectable()
export class ComicsAuthorsService {
  constructor(
    @InjectModel(ComicAuthor) private comicAuthorModel: typeof ComicAuthor,
  ) {}
  async create(createComicsAuthorDto: CreateComicsAuthorDto) {
    return await this.comicAuthorModel.create<ComicAuthor>(
      createComicsAuthorDto,
    );
  }

  async findAll() {
    return await this.comicAuthorModel.findAll();
  }
}
