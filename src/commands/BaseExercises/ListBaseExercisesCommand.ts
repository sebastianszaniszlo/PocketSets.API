import { Model, DocumentQuery } from 'mongoose';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class ListBaseExercisesCommand implements IListBaseExercisesCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public List(): DocumentQuery<IBaseExcercise[], IBaseExcercise> {

        return this.Collection.find();
    }

}

interface IListBaseExercisesCommand {

    List(): DocumentQuery<IBaseExcercise[], IBaseExcercise>;
}