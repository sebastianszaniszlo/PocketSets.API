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

    public async Create(userId: string, request: BaseExerciseRequest): Promise<IBaseExcercise> {

        return await this.Collection.create({
            Name: request.Name,
            CategoryId: request.CategoryId,
            UserId: userId,
            DefaultSets: request.DefaultSets,
            DefaultReps: request.DefaultReps,
            DefaultWeight: request.DefaultWeight,
            OneRepMax: request.OneRepMax
        });
    }

}

interface ICreateBaseExerciseCommand {

    Create(userId: string, request: BaseExerciseRequest): Promise<IBaseExcercise>;
}