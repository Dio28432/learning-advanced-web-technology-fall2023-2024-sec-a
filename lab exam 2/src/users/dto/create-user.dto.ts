import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsAlphanumeric } from 'class-validator';



export class CreateUserDto {
    @IsString()
    @Length(3, 30)
    @IsAlphanumeric()
    @IsNotEmpty()
    fullName: string;

    @IsString({ message: 'valid name is required' })
    @IsNotEmpty()
    userName: string;


    @IsEmail()
    @Length(10, 50)
    @IsNotEmpty()
    email: string;

    @IsString()
    @Length(8, 20)
    @IsNotEmpty()
    password: string;

    @IsString()
    @Length(3, 20)
    city: string;

    @IsString()
    @Length(3, 20)
    country: string;

    @IsString()
    @Length(3, 20)
    companyName: string;

    @Length(11, 15)
    @IsNotEmpty()
    phoneNumber: number;



}
