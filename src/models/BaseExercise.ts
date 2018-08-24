import { Schema, Model, model } from 'mongoose';
import IBaseExcercise from './IBaseExcercise'

const BaseExcerciseSchema: Schema = new Schema({

    Name: String,
    DefaultSets: Number,
    DefaultReps: Number,
    DefaultWeight: Number,
    OneRepMax: Number
}, { collection: 'BaseExcercise' });

export const BaseExcercise: Model<IBaseExcercise> = model<IBaseExcercise>('BaseExcercise', BaseExcerciseSchema);