import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
