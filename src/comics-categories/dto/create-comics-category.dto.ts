import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateComicsCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  comicId: number;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
