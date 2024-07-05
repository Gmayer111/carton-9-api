import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePublisherDto {
  @IsOptional()
  @IsString()
  picture: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  zipcode: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  country: string;
}
