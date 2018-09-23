import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import BaseExerciseRequest from '../../models/BaseExerciseRequest';
import IBaseExercise from '../../data/BaseExercises/IBaseExercise';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class UpdateBaseExerciseCommand implements IUpdateBaseExerciseCommand {

    constructor(private Collection: Model<IBaseExercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public async Update(id: string, request: BaseExerciseRequest): Promise<IBaseExercise> {

        return await this.Collection.findByIdAndUpdate(id, request, {
            new: true //returns the updated item
        });
    }

}

interface IUpdateBaseExerciseCommand {

    Update(id: string, request: BaseExerciseRequest): Promise<IBaseExercise>;
}