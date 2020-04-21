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

    async getAll(next: string) {

        if(!next){

            const items =  await this.superheroeModel.find({}).sort({
                createdAt: -1,
                _id: -1
             })
             .populate('country')
             .limit(2);
             
             const lastItem = items[items.length - 1];
             const created = Date.parse(lastItem.createdAt);
             const nxt = `${created}_${lastItem._id}`;
             
             return { items, next: nxt };

        }

        const [nextCreatedAt, nextId] = next.split('_');

        const items = await this.superheroeModel.find({

            $or: [{
                createdAt: { $lt: nextCreatedAt }
            }, {
                createdAt: nextCreatedAt,
            _id: { $lt: nextId }
            }]

        }).sort({
            _id: -1
        }).populate('country')
        .limit(2);

        const lastItem = items[items.length - 1];
        const created = Date.parse(lastItem.createdAt);
        const nxt = `${created}_${lastItem._id}`;
        
        return { items, next: nxt };

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
