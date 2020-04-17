import { Document } from 'mongoose';

export interface Country extends Document {
    readonly name: string;
    readonly latitude: number;
    readonly longitude: number;
}