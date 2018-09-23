import { Schema, Model, model } from 'mongoose';
import { IExercise } from './IExercise';

export const ExerciseSchema: Schema = new Schema({

    Sets: Number,
    Reps: Number,
    Weight: Number,
    BaseExerciseId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    WorkoutId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export const ExerciseMongoModel: Model<IExercise> = model<IExercise>('Exercise', ExerciseSchema);