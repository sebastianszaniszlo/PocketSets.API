import { Schema, Model, model } from 'mongoose';
import IBaseExercise from './IBaseExercise'

const BaseExerciseSchema: Schema = new Schema({

    Name: String,
    DefaultSets: Number,
    DefaultReps: Number,
    DefaultWeight: Number,
    OneRepMax: Number
});

export const BaseExerciseMongoModel: Model<IBaseExercise> = model<IBaseExercise>('BaseExercise', BaseExerciseSchema);