import { Document } from 'mongoose';
import { CountryI } from '../../country/interfaces/country.interface';

export interface SuperheroeI extends Document {
    readonly name: string;
    readonly country: CountryI;
}