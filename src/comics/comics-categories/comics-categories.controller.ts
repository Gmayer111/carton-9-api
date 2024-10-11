import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComicsCategoriesService } from './comics-categories.service';
import { CreateUpdateComicsCategoryDto } from './dto/create-update-comics-category.dto';
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
  create(@Body() createUpdateComicsCategoryDto: CreateUpdateComicsCategoryDto) {
    return this.comicsCategoriesService.create(createUpdateComicsCategoryDto);
  }

  @Get()
  findAll() {
    return this.comicsCategoriesService.findAll();
  }
}
