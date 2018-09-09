import { Model } from 'mongoose';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class ListBaseExercisesForCategoryCommand implements IListBaseExercisesForCategoryCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public async List(userId: string, categoryId: string): Promise<Array<IBaseExcercise>> {

        return await this.Collection.find({
            UserId: userId,
            CategoryId: categoryId
        });
    }

}

interface IListBaseExercisesForCategoryCommand {

    List(userId: string, categoryId: string): Promise<Array<IBaseExcercise>>;
}