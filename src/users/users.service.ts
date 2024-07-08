import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthorDto } from 'src/authors/dto/update-author.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create<User>(createUserDto);
  }

  findAll() {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.userModel.findByPk(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateAuthorDto) {
    const user = await this.userModel.findByPk(id);
    return user.update(updateUserDto);
  }

  remove(id: number) {
    return this.userModel.destroy({
      where: {
        id,
      },
    });
  }
}
