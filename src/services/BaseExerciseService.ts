import { Injectable } from '@decorators/di';
import { BaseExcercise } from '../models/BaseExercise';
import IBaseExcercise from 'models/IBaseExcercise';

@Injectable()
export default class BaseExcerciseService {

    constructor() {

    }

    RetrieveAll(callback: Function) {

        BaseExcercise.find()
    }

    Retrieve(id: string, callback: Function) {

        return BaseExcercise.findOne(id, callback);
    }
}