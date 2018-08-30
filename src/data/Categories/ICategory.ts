import { Document } from 'mongoose';
import IBaseExcercise from '../BaseExercises/IBaseExercise';

export default interface ICategory extends Document {

    Name: string,
    BaseExercises: Array<IBaseExcercise>;
}