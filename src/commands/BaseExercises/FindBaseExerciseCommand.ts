import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';
import IBaseExercise from '../../data/BaseExercises/IBaseExercise';

@Injectable()
export default class FindBaseExercisesCommand implements IFindBaseExercisesCommand {

    constructor(private Collection: Model<IBaseExercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public async Find(id: string): Promise<IBaseExercise> {

        return await this.Collection.findById(id);
    }

}

interface IFindBaseExercisesCommand {

    Find(id: string): Promise<IBaseExercise>;
}