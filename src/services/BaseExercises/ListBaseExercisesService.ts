import { Inject, Injectable } from "@decorators/di";
import ListBaseExercisesCommand from "../../commands/BaseExercises/ListBaseExercisesCommand";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";
import { DocumentQuery } from "mongoose";

@Injectable()
export default class ListBaseExercisesService implements IListBaseExcersisesService {

    constructor(@Inject(ListBaseExercisesCommand) private listBaseExercisesCommand: ListBaseExercisesCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public List(): DocumentQuery<IBaseExcercise[], IBaseExcercise> {

        return this.listBaseExercisesCommand.List();
    }
}

interface IListBaseExcersisesService {

    List(): DocumentQuery<IBaseExcercise[], IBaseExcercise>
}