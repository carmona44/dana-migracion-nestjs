import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './interfaces/country.interface';
import { Model } from 'mongoose';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountryService {
    
    constructor(@InjectModel('Country') private readonly countryModel: Model<Country>) {}

    async create(createCountryDto: CreateCountryDto): Promise<Country>{
        const country = new this.countryModel(createCountryDto);
        return country.save();
    }

    async getAll(): Promise<Country[]>{
        return this.countryModel.find().skip(0).limit(5);
    }

    async getOne(id: string): Promise<Country>{
        return this.countryModel.findById(id);
    }

    async updateOne(id: string, updatedCountry: CreateCountryDto): Promise<Country>{
        return this.countryModel.findByIdAndUpdate(id, updatedCountry, {new: true});
    }

    async deleteOne(id: string): Promise<Country>{
        return this.countryModel.findByIdAndRemove(id);
    }
}
