import {
  IsDate,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateComicDto {
  @IsDefined()
  @IsString()
  title: string;

  @IsDefined()
  @IsString()
  picture: string;

  @IsDefined()
  @IsString()
  description: string;

  @IsDefined()
  @IsDate()
  releaseDate: Date;

  @IsOptional()
  @IsNumber()
  tome: number;

  @IsDefined()
  @IsNumber()
  collectionId: number;

  @IsDefined()
  @IsNumber()
  publisherId: number;
}
