import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards, BadRequestException, UseFilters, Query } from '@nestjs/common';
import { SuperheroeService } from './superheroe.service';
import { CreateSuperheroeDto } from './dto/create-superheroe.dto';
import { Superheroe } from './interfaces/superheroe.interface';
import { AuthGuard } from 'src/auth.guard';

@Controller('superheroe')
@UseGuards(AuthGuard)
export class SuperheroeController {

    constructor(private readonly superheroeService: SuperheroeService) {}

    @Post()
    async create(@Body() createSuperheroeDto: CreateSuperheroeDto): Promise<Superheroe>{
        return await this.superheroeService.create(createSuperheroeDto);
    }

    @Get()
    async getAll(@Query('next') next: string) {
        return this.superheroeService.getAll(next);
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<Superheroe>{
        return this.superheroeService.getOne(id);
    }

    @Get('/countries/:id')
    async getByCountry(@Param('id') idCountry: string): Promise<Superheroe[]>{
        return this.superheroeService.getByCountry(idCountry);
    }

    @Put(':id')
    async updateOne(@Param('id') id: string, @Body() updatedSuperheroe: CreateSuperheroeDto): Promise<Superheroe>{
        return this.superheroeService.updateOne(id, updatedSuperheroe);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: string): Promise<Superheroe> {
        return this.superheroeService.deleteOne(id);
    }
}
