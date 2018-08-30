import { Model, DocumentQuery } from 'mongoose';
import { Injectable } from '@decorators/di';
import BaseExerciseRequest from '../../models/BaseExerciseRequest';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class UpdateBaseExerciseCommand implements IUpdateBaseExcerciseCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public Update(id: string, request: BaseExerciseRequest): DocumentQuery<IBaseExcercise, IBaseExcercise> {

        return this.Collection.findByIdAndUpdate(id, request, { new: true });
    }

}

interface IUpdateBaseExcerciseCommand {

    Update(id: string, request: BaseExerciseRequest): DocumentQuery<IBaseExcercise, IBaseExcercise>;
}