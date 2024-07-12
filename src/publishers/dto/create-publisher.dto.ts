import { IsDefined, IsOptional, IsString } from 'class-validator';

export class CreatePublisherDto {
  @IsOptional()
  @IsString()
  picture: string;

  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsString()
  address: string;

  @IsDefined()
  @IsString()
  zipcode: string;

  @IsDefined()
  @IsString()
  city: string;

  @IsDefined()
  @IsString()
  country: string;
}
