import { Document } from 'mongoose';

export default interface IBaseExcercise extends Document {

    Name: string;
    DefaultSets?: number;
    DefaultReps?: number;
    DefaultWeight?: number;
    OneRepMax?: number;
    CategoryId: string;
}