import { Model } from 'mongoose';
import IBaseExercise from '../../data/BaseExercises/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class ListBaseExercisesCommand implements IListBaseExercisesCommand {

    constructor(private Collection: Model<IBaseExercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public async List(userId: string): Promise<Array<IBaseExercise>> {

        return await this.Collection.find({
            UserId: userId
        });
    }

}

interface IListBaseExercisesCommand {

    List(userId: string): Promise<Array<IBaseExercise>>;
}