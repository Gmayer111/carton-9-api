import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/authorization/enums/role.enum';
import { Roles } from 'src/authorization/roles.decorator';

@ApiTags('Authors')
@ApiBearerAuth()
@Roles(RoleEnum.admin)
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @Roles(RoleEnum.admin, RoleEnum.user)
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  @Roles(RoleEnum.admin, RoleEnum.user)
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  @Roles(RoleEnum.admin, RoleEnum.user)
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  @Roles(RoleEnum.admin, RoleEnum.user)
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
