import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CountryI } from './interfaces/country.interface';
import { Model } from 'mongoose';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountryService {
    
    constructor(@InjectModel('Country') private readonly countryModel: Model<CountryI>) {}

    async create(createCountryDto: CreateCountryDto): Promise<CountryI>{
        const country = new this.countryModel(createCountryDto);
        return country.save();
    }

    async getAll(): Promise<CountryI[]>{
        return this.countryModel.find();
    }

    async getOne(id: string): Promise<CountryI>{
        return this.countryModel.findById(id);
    }

    async updateOne(id: string, updatedCountry: CreateCountryDto): Promise<CountryI>{
        return this.countryModel.findByIdAndUpdate(id, updatedCountry, {new: true});
    }

    async deleteOne(id: string): Promise<CountryI>{
        return this.countryModel.findByIdAndRemove(id);
    }
}
