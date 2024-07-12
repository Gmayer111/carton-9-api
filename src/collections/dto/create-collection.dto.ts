import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCollectionDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  total: number;
}
