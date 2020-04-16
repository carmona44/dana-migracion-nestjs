import * as mongoose from 'mongoose';

export const CountrySchema = new mongoose.Schema({
  name: {type: String, required: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
});