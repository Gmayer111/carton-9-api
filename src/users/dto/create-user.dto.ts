import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { RoleEnum } from 'src/auth/enums/role.enum';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

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
  @IsDate()
  birthdate: Date;

  @IsNotEmpty()
  role: RoleEnum;

  @IsOptional()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  picture: string;
}
