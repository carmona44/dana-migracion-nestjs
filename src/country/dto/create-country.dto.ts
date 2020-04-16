import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateCountryDto {

    @IsNotEmpty() @IsString()
    readonly name;

    @IsNotEmpty() @IsNumber()
    readonly latitude;

    @IsNotEmpty() @IsNumber()
    readonly longitude;
}