import { IsEmail, IsNotEmpty, IsString } from "class-validator"

 export class AuthDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty() 
    @IsEmail() 
    email: string;

    @IsNotEmpty() 
    @IsString() 
    password: string;

}

export interface UserLoginInterface { 
    firstname: string,
    lastname: string,
    email: string,
    hash: string
}


import { PartialType } from "@nestjs/mapped-types";

export class UpdateUserDto extends PartialType(AuthDto){}