import { Document } from 'mongoose';

export interface IExercise extends Document {
    
    BaseExerciseId: number;
    WorkoutId: number,
    Sets: number;
    Reps: number;
    Weight: number;
}