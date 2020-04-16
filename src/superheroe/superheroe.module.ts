import { Module } from '@nestjs/common';
import { SuperheroeController } from './superheroe.controller';
import { SuperheroeService } from './superheroe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperheroeSchema } from './schemas/superheroe.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Superheroe', schema: SuperheroeSchema }])],
    controllers: [SuperheroeController],
    providers: [SuperheroeService],
})

export class SuperheroeModule {}
