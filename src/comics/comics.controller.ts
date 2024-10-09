import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ComicsService } from './comics.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../authorization/roles.decorator';
import { RoleEnum } from 'src/authorization/enums/role.enum';

@ApiTags('Comics')
@ApiBearerAuth()
@Roles(RoleEnum.admin, RoleEnum.user)
@Controller('comics')
export class ComicsController {
  constructor(private readonly comicsService: ComicsService) {}

  @Post()
  create(@Body() createComicDto: CreateComicDto) {
    return this.comicsService.create(createComicDto);
  }

  @Get()
  findAll() {
    return this.comicsService.findAll();
  }

  @Get('comic-authors-categories')
  getAllComicAuthorsCategories() {
    return this.comicsService.getAllComicAuthorsCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateComicDto: UpdateComicDto) {
    return this.comicsService.update(+id, updateComicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicsService.remove(+id);
  }
}
