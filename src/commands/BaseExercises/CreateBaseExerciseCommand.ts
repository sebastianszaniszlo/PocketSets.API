import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import BaseExerciseRequest from '../../models/BaseExerciseRequest';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class CreateBaseExerciseCommand implements ICreateBaseExerciseCommand{

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public Create(request: BaseExerciseRequest): Promise<IBaseExcercise> {

        return this.Collection.create(request);
    }

}

interface ICreateBaseExerciseCommand {

    Create(request: BaseExerciseRequest): Promise<IBaseExcercise>;
}