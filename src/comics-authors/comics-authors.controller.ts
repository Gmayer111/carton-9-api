import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComicsAuthorsService } from './comics-authors.service';
import { CreateComicsAuthorDto } from './dto/create-comics-author.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/authorization/enums/role.enum';
import { Roles } from 'src/authorization/roles.decorator';

@ApiTags('Comics-authors')
@ApiBearerAuth()
@Roles(RoleEnum.admin)
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
}
