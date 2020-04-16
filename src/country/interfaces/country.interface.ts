import { Document } from 'mongoose';

export interface CountryI extends Document {
    readonly name: string;
    readonly latitude: number;
    readonly longitude: number;
}