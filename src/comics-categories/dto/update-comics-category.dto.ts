import { PartialType } from '@nestjs/mapped-types';
import { CreateComicsCategoryDto } from './create-comics-category.dto';

export class UpdateComicsCategoryDto extends PartialType(CreateComicsCategoryDto) {}
