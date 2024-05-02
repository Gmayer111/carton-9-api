import { PartialType } from '@nestjs/mapped-types';
import { CreateComicsAuthorDto } from './create-comics-author.dto';

export class UpdateComicsAuthorDto extends PartialType(CreateComicsAuthorDto) {}
