import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Collection } from './models/collection.models';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectModel(Collection) private collectionModel: typeof Collection,
  ) {}
  async create(createCollectionDto: CreateCollectionDto) {
    return await this.collectionModel.create(createCollectionDto);
  }

  async findAll() {
    return await this.collectionModel.findAll();
  }

  async findOne(id: number) {
    return await this.collectionModel.findByPk(id);
  }

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    const collection = await this.collectionModel.findByPk(id);
    return collection.update(updateCollectionDto);
  }

  async remove(id: number) {
    return await this.collectionModel.destroy({
      where: {
        id,
      },
    });
  }
}
