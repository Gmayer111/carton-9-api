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

    // const existingUser = await this.userModel.findOne({
    //   where: {
    //     email,
    //   },
    // });

    // if (existingUser) return;
    console.log(createUserDtoNoAuth);

    return await this.userModel.create<User>({ ...createUserDtoNoAuth });
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: string) {
    return this.userModel.findOne({
      where: {
        id,
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
