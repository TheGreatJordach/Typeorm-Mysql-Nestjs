import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 8)
  readonly firstName: string;
  @Length(2, 8)
  readonly lastName: string;
  @IsPhoneNumber('MA')
  readonly phone: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
}
