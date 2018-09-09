import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import { BaseExerciseMongoModel } from '../../data/BaseExercises/BaseExerciseMongoModel';
import IBaseExcercise from '../../data/BaseExercises/IBaseExercise';

@Injectable()
export default class FindBaseExercisesCommand implements IFindBaseExercisesCommand {

    constructor(private Collection: Model<IBaseExcercise>) {
        
        this.Collection = BaseExerciseMongoModel;
    }

    public async Find(id: string): Promise<IBaseExcercise> {

        return await this.Collection.findById(id);
    }

}

interface IFindBaseExercisesCommand {

    Find(id: string): Promise<IBaseExcercise>;
}