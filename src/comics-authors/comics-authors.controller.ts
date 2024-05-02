import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicsAuthorsService } from './comics-authors.service';
import { CreateComicsAuthorDto } from './dto/create-comics-author.dto';
import { UpdateComicsAuthorDto } from './dto/update-comics-author.dto';

@Controller('comics-authors')
export class ComicsAuthorsController {
  constructor(private readonly comicsAuthorsService: ComicsAuthorsService) {}

  @Post()
  create(@Body() createComicsAuthorDto: CreateComicsAuthorDto) {
    return this.comicsAuthorsService.create(createComicsAuthorDto);
  }

  @Get()
  findAll() {
    return this.comicsAuthorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comicsAuthorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComicsAuthorDto: UpdateComicsAuthorDto) {
    return this.comicsAuthorsService.update(+id, updateComicsAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comicsAuthorsService.remove(+id);
  }
}
