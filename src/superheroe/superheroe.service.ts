import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Superheroe } from './interfaces/superheroe.interface';
import { CreateSuperheroeDto } from './dto/create-superheroe.dto';

@Injectable()
export class SuperheroeService {

    constructor(@InjectModel('Superheroe') private readonly superheroeModel: Model<Superheroe>) {}

    async create(createSuperheroeDto: CreateSuperheroeDto): Promise<Superheroe>{
        const superheroe = new this.superheroeModel(createSuperheroeDto);
        return superheroe.save();
    }

    async getAll(): Promise<Superheroe[]> {
        return this.superheroeModel.find().populate('country').skip(0).limit(10);
    }

    async getOne(id: string): Promise<Superheroe> {
        return this.superheroeModel.findById(id).populate('country');
    }

    async getByCountry(idCountry: string): Promise<Superheroe[]>{        
        return this.superheroeModel.find({country: idCountry});
    }

    async updateOne(id: string, updatedSuperheroe: CreateSuperheroeDto): Promise<Superheroe> {
        return this.superheroeModel.findByIdAndUpdate(id, updatedSuperheroe, {new: true});
    }

    async deleteOne(id: string): Promise<Superheroe> {
        return this.superheroeModel.findByIdAndRemove(id);
    }

}
