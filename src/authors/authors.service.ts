import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './models/author.models';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author) private authorModel: typeof Author) {}
  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorModel.create<Author>(createAuthorDto);
  }

  async findAll() {
    return await this.authorModel.findAll();
  }

  async findOne(id: number) {
    return await this.authorModel.findByPk(id);
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.authorModel.findByPk(id);
    return author.update(updateAuthorDto);
  }

  async remove(id: number) {
    return await this.authorModel.destroy({
      where: {
        id,
      },
    });
  }
}
