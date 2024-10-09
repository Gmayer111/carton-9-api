import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUpdateComicsAuthorDto {
  @IsNotEmpty()
  @IsNumber()
  comicId: number;

  @IsNotEmpty()
  @IsNumber()
  authorId: number;
}
