import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './interfaces/country.interface';
import { AuthGuard } from 'src/auth.guard';

@Controller('country')
@UseGuards(AuthGuard)
export class CountryController {

    constructor(private readonly countryService: CountryService) {}

    @Post()
    async create(@Body() createCountryDto: CreateCountryDto): Promise<Country>{
        return await this.countryService.create(createCountryDto);
    }

    @Get()
    async getAll(): Promise<Country[]>{
        return this.countryService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<Country>{
        return this.countryService.getOne(id);
    }

    @Put(':id')
    async updateOne(@Param('id') id: string, @Body() updatedCountry: CreateCountryDto): Promise<Country>{
        return this.countryService.updateOne(id, updatedCountry);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: string): Promise<Country>{
        return this.countryService.deleteOne(id);
    }
}
