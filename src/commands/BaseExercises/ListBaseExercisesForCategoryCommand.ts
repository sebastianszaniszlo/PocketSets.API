import { Model, DocumentQuery } from 'mongoose';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class ListBaseExercisesForCategoryCommand implements IListBaseExercisesForCategoryCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public List(categoryId: string): DocumentQuery<IBaseExcercise[], IBaseExcercise> {

        return this.Collection.find({ CategoryId: categoryId });
    }

}

interface IListBaseExercisesForCategoryCommand {

    List(categoryId: string): DocumentQuery<IBaseExcercise[], IBaseExcercise>;
}