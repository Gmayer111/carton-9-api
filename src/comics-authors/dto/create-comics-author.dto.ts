import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateComicsAuthorDto {
  @IsNumber()
  @IsNotEmpty()
  comicId: number;

  @IsNumber()
  @IsNotEmpty()
  authorId: number;
}
