import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicsCategoriesService } from './comics-categories.service';
import { CreateComicsCategoryDto } from './dto/create-comics-category.dto';
import { UpdateComicsCategoryDto } from './dto/update-comics-category.dto';

@Controller('comics-categories')
export class ComicsCategoriesController {
  constructor(private readonly comicsCategoriesService: ComicsCategoriesService) {}

  @Post()
  create(@Body() createComicsCategoryDto: CreateComicsCategoryDto) {
    return this.comicsCategoriesService.create(createComicsCategoryDto);
  }

  @Get()
  findAll() {
    return this.comicsCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicsCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComicsCategoryDto: UpdateComicsCategoryDto) {
    return this.comicsCategoriesService.update(+id, updateComicsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicsCategoriesService.remove(+id);
  }
}
