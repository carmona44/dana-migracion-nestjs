import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateSuperheroeDto {

    @IsNotEmpty() @IsString()
    readonly name;

    @IsNotEmpty() @IsString()
    readonly country: string;
}