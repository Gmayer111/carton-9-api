import { Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comic } from './models/comic.models';
import { Author } from 'src/authors/models/author.models';
import { Category } from 'src/categories/models/category.models';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';
import { CollectionsService } from 'src/collections/collections.service';
import { CreateUpdateComicsAuthorDto } from './comics-authors/dto/create-update-comics-author.dto';
import { CreateUpdateComicsCategoryDto } from './comics-categories/dto/create-update-comics-category.dto';

@Injectable()
export class ComicsService {
  constructor(
    private sequelize: Sequelize,
    private collectionService: CollectionsService,
    @InjectModel(Comic)
    private comicModel: typeof Comic,
  ) {}

  async create(createComicDto: CreateComicDto) {
    const comic = await this.comicModel.create({ ...createComicDto });

    const sqlCountQuery = `
    SELECT C.total FROM Collections C WHERE C.id = :collectionId
    `;

    const collectionCount: { total: number }[] = await this.sequelize.query(
      sqlCountQuery,
      {
        replacements: { collectionId: createComicDto.collectionId },
        type: QueryTypes.SELECT,
      },
    );

    await this.collectionService.updateTotalColumn(
      createComicDto.collectionId,
      collectionCount[0].total + 1,
    );

    return this.createUpdateComicAuthors(comic.id, createComicDto.Authors);
  }

  async update(id: number, updateComicDto: UpdateComicDto) {
    const comic = await this.comicModel.findOne({
      where: { id },
    });

    this.createUpdateComicAuthors(comic.id, updateComicDto.Authors);
    this.createUpdateComicCategories(comic.id, updateComicDto.Categories);
    return comic.update(updateComicDto);
  }

  async createUpdateComicAuthors(
    comicId: number,
    createUpdateComicsAuthorsDto: CreateUpdateComicsAuthorDto[],
  ) {
    if (createUpdateComicsAuthorsDto.length) {
      const comic = await this.findOne(comicId);
      await comic.$set(
        'Authors',
        createUpdateComicsAuthorsDto.map((item) => item.authorId),
      );
    }
  }

  async createUpdateComicCategories(
    comicId: number,
    createUpdateComicsCategoriesDto: CreateUpdateComicsCategoryDto[],
  ) {
    if (createUpdateComicsCategoriesDto.length) {
      const comic = await this.findOne(comicId);
      await comic.$set(
        'Categories',
        createUpdateComicsCategoriesDto.map((item) => item.categoryId),
      );
    }
  }

  async findAll() {
    return await this.comicModel.findAll({
      include: [
        {
          model: Author,
          through: { attributes: [] },
        },
        {
          model: Category,
          through: { attributes: [] },
        },
        {
          association: 'Publisher',
        },
        {
          association: 'Collection',
        },
      ],
    });
  }

  async findOne(id: number) {
    const comic = await this.comicModel.findOne({
      where: { id },
      include: [
        {
          model: Author,
          through: { attributes: [] },
        },
        {
          model: Category,
          through: { attributes: [] },
        },
        {
          association: 'Publisher',
        },
        {
          association: 'Collection',
        },
      ],
    });
    return comic;
  }

  async getAllComicAssociations() {
    const sqlQuery = `
    SELECT id, name as comicAssociationsName, 'collection' as comicAssociationsRecordtype FROM Collections
    UNION
    SELECT id, name as comicAssociationsName, 'publisher' as comicAssociationsRecordtype FROM Publishers
    UNION
    SELECT id, userName as comicAssociationsName, 'author' as comicAssociationsRecordtype FROM Authors
    UNION
    SELECT id, label as comicAssociationsName, 'category' as comicAssociationsRecordtype FROM Categories LIMIT 100
    `;

    const selectItemsQuery = await this.sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    return selectItemsQuery;
  }

  async remove(id: number) {
    const comic = await this.comicModel.findOne({
      where: { id },
    });
    const sqlCountQuery = `
    SELECT C.total FROM Collections C WHERE C.id = :collectionId
    `;

    const collectionCount: { total: number }[] = await this.sequelize.query(
      sqlCountQuery,
      {
        replacements: { collectionId: comic.collectionId },
        type: QueryTypes.SELECT,
      },
    );
    await this.collectionService.updateTotalColumn(
      comic.collectionId,
      collectionCount[0].total - 1,
    );
    return await this.comicModel.destroy({
      where: { id },
    });
  }
}
