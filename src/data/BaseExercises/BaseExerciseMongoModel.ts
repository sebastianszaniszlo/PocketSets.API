import { Schema, Model, model } from 'mongoose';
import IBaseExercise from './IBaseExercise'

export const BaseExerciseSchema: Schema = new Schema({

    Name: {
        type: String,
        required: true
    },
    DefaultSets: Number,
    DefaultReps: Number,
    DefaultWeight: Number,
    OneRepMax: Number,
    CategoryId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    UserId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export const BaseExerciseMongoModel: Model<IBaseExercise> = model<IBaseExercise>('BaseExercise', BaseExerciseSchema);