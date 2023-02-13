import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

 export class AuthDto {
    @ApiProperty({example: 'Nuradil'})
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @ApiProperty({example: 'Satybekov'})
    @IsNotEmpty()
    @IsString()
    lastname: string;

    @ApiProperty({example: 'any@test.com'})
    @IsNotEmpty() 
    @IsEmail() 
    email: string;

    @ApiProperty({example: 'password2'})
    @IsNotEmpty() 
    @IsString() 
    password: string;

}

export interface UserLoginInterface { 
    firstname: string,
    lastname: string,
    email: string,
    hash: string,
    id?: number // made id optional so in some cases it will not b eproblemn
}


import { PartialType } from "@nestjs/mapped-types";

export class signInDto extends PartialType(AuthDto){
    @ApiProperty({ example: 'any@test.com' })
    email?: string;
  
    @ApiProperty({ example: 'password2' })
    password?: string;
}