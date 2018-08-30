import { Model, DocumentQuery } from 'mongoose';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';

@Injectable()
export default class FindBaseExercisesCommand implements IFindBaseExercisesCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public Find(id: string) : DocumentQuery<IBaseExcercise, IBaseExcercise> {

        return this.Collection.findById(id);
    }

}

interface IFindBaseExercisesCommand {

    Find(id: string) : DocumentQuery<IBaseExcercise, IBaseExcercise>;
}