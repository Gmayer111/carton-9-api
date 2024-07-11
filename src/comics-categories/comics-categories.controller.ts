import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComicsCategoriesService } from './comics-categories.service';
import { CreateComicsCategoryDto } from './dto/create-comics-category.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/authorization/roles.decorator';
import { RoleEnum } from 'src/authorization/enums/role.enum';

@ApiTags('Comics-categories')
@ApiBearerAuth()
@Roles(RoleEnum.admin, RoleEnum.user)
@Controller('comics-categories')
export class ComicsCategoriesController {
  constructor(
    private readonly comicsCategoriesService: ComicsCategoriesService,
  ) {}

  @Post()
  create(@Body() createComicsCategoryDto: CreateComicsCategoryDto) {
    return this.comicsCategoriesService.create(createComicsCategoryDto);
  }

  @Get()
  findAll() {
    return this.comicsCategoriesService.findAll();
  }
}
