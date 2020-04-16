import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { CountryI } from "../../country/interfaces/country.interface";

export class CreateSuperheroeDto {

    @IsNotEmpty() @IsString()
    readonly name;

    @IsNotEmpty()
    readonly country: CountryI;
}