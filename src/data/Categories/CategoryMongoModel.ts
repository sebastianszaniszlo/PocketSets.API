import { Schema, Model, model } from 'mongoose';
import ICategory from './ICategory';
import { BaseExerciseSchema } from '../BaseExercises/BaseExerciseMongoModel';

export const CategorySchema: Schema = new Schema({

    Name: String

});

export const CategoryMongoModel: Model<ICategory> = model<ICategory>('Category', CategorySchema);