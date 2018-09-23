import { Model } from 'mongoose';
import IBaseExercise from '../../data/BaseExercises/IBaseExercise';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';

@Injectable()
export default class ListBaseExercisesForCategoryCommand implements IListBaseExercisesForCategoryCommand {

    constructor(private Collection: Model<IBaseExercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public async List(userId: string, categoryId: string): Promise<Array<IBaseExercise>> {

        return await this.Collection.find({
            UserId: userId,
            CategoryId: categoryId
        });
    }

}

interface IListBaseExercisesForCategoryCommand {

    List(userId: string, categoryId: string): Promise<Array<IBaseExercise>>;
}