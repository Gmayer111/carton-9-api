import { Injectable } from '@nestjs/common';
import { CreateComicsAuthorDto } from './dto/create-comics-author.dto';
import { UpdateComicsAuthorDto } from './dto/update-comics-author.dto';

@Injectable()
export class ComicsAuthorsService {
  create(createComicsAuthorDto: CreateComicsAuthorDto) {
    return 'This action adds a new comicsAuthor';
  }

  findAll() {
    return `This action returns all comicsAuthors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comicsAuthor`;
  }

  update(id: number, updateComicsAuthorDto: UpdateComicsAuthorDto) {
    return `This action updates a #${id} comicsAuthor`;
  }

  remove(id: number) {
    return `This action removes a #${id} comicsAuthor`;
  }
}
