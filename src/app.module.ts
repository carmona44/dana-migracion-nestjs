import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { SuperheroeModule } from './superheroe/superheroe.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CountryModule,
    SuperheroeModule, 
    MongooseModule.forRoot('mongodb://localhost/dana', 
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useFindAndModify: false 
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
