import { Injectable } from '@nestjs/common';
import { CreateComicsCategoryDto } from './dto/create-comics-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ComicCategory } from './models/comic-category.models';

@Injectable()
export class ComicsCategoriesService {
  constructor(
    @InjectModel(ComicCategory)
    private comicCategoryModel: typeof ComicCategory,
  ) {}
  create(createComicsCategoryDto: CreateComicsCategoryDto) {
    return this.comicCategoryModel.create<ComicCategory>(
      createComicsCategoryDto,
    );
  }

  findAll() {
    return this.comicCategoryModel.findAll();
  }
}
