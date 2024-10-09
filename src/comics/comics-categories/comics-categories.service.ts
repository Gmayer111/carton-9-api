import { Injectable } from '@nestjs/common';
import { CreateUpdateComicsCategoryDto } from './dto/create-update-comics-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ComicCategory } from './models/comic-category.models';

@Injectable()
export class ComicsCategoriesService {
  constructor(
    @InjectModel(ComicCategory)
    private comicCategoryModel: typeof ComicCategory,
  ) {}
  create(createUpdateComicsCategoryDto: CreateUpdateComicsCategoryDto) {
    return this.comicCategoryModel.create<ComicCategory>(
      createUpdateComicsCategoryDto,
    );
  }

  findAll() {
    return this.comicCategoryModel.findAll();
  }
}
