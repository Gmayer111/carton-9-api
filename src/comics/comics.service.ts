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

@Injectable()
export class ComicsService {
  constructor(
    private sequelize: Sequelize,
    private collectionService: CollectionsService,
    @InjectModel(Comic)
    private comicModel: typeof Comic,
  ) {}
  async create(createComicDto: CreateComicDto) {
    const comic = await this.comicModel.create<Comic>(createComicDto);

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

  async update(id: number, updateComicDto: UpdateComicDto) {
    const comic = await this.comicModel.findOne({
      where: { id },
    });
    return comic.update(updateComicDto);
  }

  async remove(id: number) {
    return await this.comicModel.destroy({
      where: { id },
    });
  }
}
