import { Model, DocumentQuery } from 'mongoose';
import IBaseExcercise from '../../models/BaseExercise/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../models/BaseExercise/BaseExerciseMongoModel';

@Injectable()
export default class FindBaseExercisesCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public Find(id: string) : DocumentQuery<IBaseExcercise, IBaseExcercise> {

        return this.Collection.findById(id);
    }

}