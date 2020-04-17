import * as mongoose from 'mongoose';

export const SuperheroeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  country: {type: mongoose.SchemaTypes.ObjectId, ref:"Country", required: true},
}, 
  { versionKey: false, timestamps: true }
);