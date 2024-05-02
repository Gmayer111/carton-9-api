import { Injectable } from '@nestjs/common';
import { CreateComicsCategoryDto } from './dto/create-comics-category.dto';
import { UpdateComicsCategoryDto } from './dto/update-comics-category.dto';

@Injectable()
export class ComicsCategoriesService {
  create(createComicsCategoryDto: CreateComicsCategoryDto) {
    return 'This action adds a new comicsCategory';
  }

  findAll() {
    return `This action returns all comicsCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comicsCategory`;
  }

  update(id: number, updateComicsCategoryDto: UpdateComicsCategoryDto) {
    return `This action updates a #${id} comicsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} comicsCategory`;
  }
}
