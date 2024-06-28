import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { ...createUserDtoNoAuth } = createUserDto;

    return await this.userModel.create<User>({ ...createUserDtoNoAuth });
  }

  findAll() {
    return this.userModel.findAll();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
