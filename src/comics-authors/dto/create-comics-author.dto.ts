import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateComicsAuthorDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  comicId: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  authorId: number;
}
