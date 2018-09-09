import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import BaseExerciseRequest from '../../models/BaseExerciseRequest';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class UpdateBaseExerciseCommand implements IUpdateBaseExcerciseCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public async Update(id: string, request: BaseExerciseRequest): Promise<IBaseExcercise> {

        return await this.Collection.findByIdAndUpdate(id, request, {
            new: true //returns the updated item
        });
    }

}

interface IUpdateBaseExcerciseCommand {

    Update(id: string, request: BaseExerciseRequest): Promise<IBaseExcercise>;
}