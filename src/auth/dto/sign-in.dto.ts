import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
