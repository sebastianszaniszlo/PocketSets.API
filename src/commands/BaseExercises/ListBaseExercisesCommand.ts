import { Model, DocumentQuery } from 'mongoose';
import IBaseExcercise from '../../models/BaseExercise/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../models/BaseExercise/BaseExerciseMongoModel';

@Injectable()
export default class ListBaseExercisesCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public List(): DocumentQuery<IBaseExcercise[], IBaseExcercise> {

        return this.Collection.find();
    }

}