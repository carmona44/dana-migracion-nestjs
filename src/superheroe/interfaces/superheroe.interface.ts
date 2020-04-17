import { Document } from 'mongoose';

export interface Superheroe extends Document {
    readonly name: string;
    readonly country: string;
}