import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUpdateComicsCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  comicId: number;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
