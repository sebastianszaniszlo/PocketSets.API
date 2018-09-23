import { Document } from 'mongoose';

export interface IWorkout extends Document {

    StartTime: Date,
    EndTime: Date
}