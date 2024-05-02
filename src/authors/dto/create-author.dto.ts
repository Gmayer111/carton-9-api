import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  picture: string;

  @IsOptional()
  @IsString()
  link: string;
}
