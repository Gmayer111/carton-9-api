import {
  IsArray,
  IsDate,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateUpdateComicsAuthorDto } from '../comics-authors/dto/create-update-comics-author.dto';
import { Type } from 'class-transformer';

export class CreateComicDto {
  @IsDefined()
  @IsString()
  title: string;

  @IsDefined()
  @IsDate()
  releaseDate: Date;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  tome: number;

  @IsOptional()
  @IsString()
  picture: string;

  @IsDefined()
  @IsNumber()
  collectionId: number;

  @IsDefined()
  @IsNumber()
  publisherId: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateUpdateComicsAuthorDto)
  Authors: CreateUpdateComicsAuthorDto[];
}
