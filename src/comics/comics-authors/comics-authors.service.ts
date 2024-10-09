import { Injectable } from '@nestjs/common';
import { CreateUpdateComicsAuthorDto } from './dto/create-update-comics-author.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ComicAuthor } from './models/comic-author.model';

@Injectable()
export class ComicsAuthorsService {
  constructor(
    @InjectModel(ComicAuthor) private comicAuthorModel: typeof ComicAuthor,
  ) {}
  async create(createUpdateComicsAuthorDto: CreateUpdateComicsAuthorDto) {
    return await this.comicAuthorModel.create({
      ...createUpdateComicsAuthorDto,
    });
  }

  async findAll() {
    return await this.comicAuthorModel.findAll();
  }
}
