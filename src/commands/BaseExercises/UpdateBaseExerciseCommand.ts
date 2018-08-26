import { Model, DocumentQuery } from 'mongoose';
import IBaseExcercise from '../../models/BaseExercise/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../models/BaseExercise/BaseExerciseMongoModel';
import BaseExercise from '../../models/BaseExercise/BaseExercise';

@Injectable()
export default class UpdateBaseExerciseCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public Update(id: string, request: any): DocumentQuery<IBaseExcercise, IBaseExcercise> {

        let baseExercise: BaseExercise = new BaseExercise(request.Name,
                                                            request.DefaultSets,
                                                            request.DefaultReps,
                                                            request.DefaultWeight,
                                                            request.OneRepMax);

        return this.Collection.findByIdAndUpdate(id, baseExercise);
    }

}