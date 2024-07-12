import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Publisher } from './models/publisher.models';

@Injectable()
export class PublishersService {
  constructor(
    @InjectModel(Publisher) private publisherModel: typeof Publisher,
  ) {}
  async create(createPublisherDto: CreatePublisherDto) {
    return await this.publisherModel.create(createPublisherDto);
  }

  async findAll() {
    return await this.publisherModel.findAll();
  }

  async findOne(id: number) {
    return this.publisherModel.findByPk(id);
  }

  async update(id: number, updatePublisherDto: UpdatePublisherDto) {
    const publisher = await this.publisherModel.findByPk(id);
    return publisher.update(updatePublisherDto);
  }

  async remove(id: number) {
    return await this.publisherModel.destroy({
      where: {
        id,
      },
    });
  }
}
