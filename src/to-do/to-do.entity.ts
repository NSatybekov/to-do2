import {IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger";

export class ToDoDto {
   @ApiProperty({example: 'test title'})
   @IsNotEmpty() 
   @IsString() 
   to_do_title: string;

   @ApiProperty({example: 'test text'})
   @IsNotEmpty() 
   @IsString() 
   to_do_text: string;
}

export interface ToDoInterface { 
   to_do_id: number,
   user_id: number,
   to_do_title: string,
   to_do_text: string

}



import { PartialType } from "@nestjs/mapped-types";
// partial types make types from original dto optional so i can provide or not provide update to any field

export class UpdateToDoDto extends PartialType(ToDoDto){
    @ApiProperty({ example: 'test title updated' })
    to_do_title?: string;
  
    @ApiProperty({ example: 'test text updated' })
    to_do_text?: string;
  }