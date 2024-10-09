import { Controller, Get, Post, Body } from '@nestjs/common';
import { ComicsAuthorsService } from './comics-authors.service';
import { CreateUpdateComicsAuthorDto } from './dto/create-update-comics-author.dto';
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
  create(@Body() createUpdateComicsAuthorDto: CreateUpdateComicsAuthorDto) {
    return this.comicsAuthorsService.create(createUpdateComicsAuthorDto);
  }

  @Get()
  findAll() {
    return this.comicsAuthorsService.findAll();
  }
}
