import { Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comic } from './models/comic.models';

@Injectable()
export class ComicsService {
  constructor(
    @InjectModel(Comic)
    private comicModel: typeof Comic,
  ) {}
  async create(createComicDto: CreateComicDto) {
    return await this.comicModel.create<Comic>(createComicDto);
  }

  async findAll() {
    return await this.comicModel.findAll();
  }

  async findOne(id: number) {
    const comic = await this.comicModel.findOne({
      where: { id },
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
