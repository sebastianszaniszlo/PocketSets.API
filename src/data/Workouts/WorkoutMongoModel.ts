import { Schema, Model, model, SchemaTypes } from 'mongoose';
import { IWorkout } from './IWorkout';

export const WorkoutSchema: Schema = new Schema({

    StartTime: {
        type: SchemaTypes.Date,
        required: true
    },
    EndTime: {
        type: SchemaTypes.Date,
        required: true
    }
    
});

export const WorkoutMongoModel: Model<IWorkout> = model<IWorkout>('Workout', WorkoutSchema);