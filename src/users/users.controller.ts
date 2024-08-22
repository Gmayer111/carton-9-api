import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { Public } from 'src/auth/public.decorator';
import { Roles } from 'src/authorization/roles.decorator';
import { RoleEnum } from 'src/authorization/enums/role.enum';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 401,
  })
  @Public()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(createUserDto);
    return this.usersService.findOne(user.id);
  }

  @Get()
  @Roles(RoleEnum.admin, RoleEnum.user)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(RoleEnum.admin, RoleEnum.user)
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Roles(RoleEnum.admin, RoleEnum.user)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Roles(RoleEnum.admin, RoleEnum.user)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
