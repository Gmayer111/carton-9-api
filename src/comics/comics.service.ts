import { Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comic } from './models/comic.models';
import { Author } from 'src/authors/models/author.models';
import { Category } from 'src/categories/models/category.models';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';
import { CollectionsService } from 'src/collections/collections.service';

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

    return comic;
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

  async getAllComicAuthorsCategories() {
    const sqlQuery = `
    SELECT id, name, 'collection' as recordtype FROM Collections
    UNION
    SELECT id, name, 'publisher' as recordtype FROM Publishers
    UNION
    SELECT id, userName, 'author' as recordtype FROM Authors
    UNION
    SELECT id, label, 'category' as recordtype FROM Categories LIMIT 100
    `;

    const selectItemsQuery = await this.sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    return selectItemsQuery;
  }

  async remove(id: number) {
    return await this.comicModel.destroy({
      where: { id },
    });
  }
}
