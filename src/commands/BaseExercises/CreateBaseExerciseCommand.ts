import { Model, DocumentQuery } from 'mongoose';
import IBaseExcercise from '../../models/BaseExercise/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../models/BaseExercise/BaseExerciseMongoModel';
import BaseExercise from '../../models/BaseExercise/BaseExercise';

@Injectable()
export default class CreateBaseExerciseCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public Create(request: any): Promise<IBaseExcercise> {

        let baseExercise: BaseExercise = new BaseExercise(request.Name,
                                                            request.DefaultSets,
                                                            request.DefaultReps,
                                                            request.DefaultWeight,
                                                            request.OneRepMax);

        return this.Collection.create(baseExercise);
    }

}