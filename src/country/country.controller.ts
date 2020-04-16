import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { CountryI } from './interfaces/country.interface';

@Controller('country')
export class CountryController {

    constructor(private readonly countryService: CountryService) {}

    @Post()
    async create(@Body() createCountryDto: CreateCountryDto){
        return await this.countryService.create(createCountryDto);
    }

    @Get()
    async getAll(): Promise<CountryI[]>{
        return this.countryService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<CountryI>{
        return this.countryService.getOne(id);
    }

    @Put(':id')
    async updateOne(@Param('id') id: string, @Body() updatedCountry: CreateCountryDto): Promise<CountryI>{
        return this.countryService.updateOne(id, updatedCountry);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: string): Promise<CountryI>{
        return this.countryService.deleteOne(id);
    }
}
