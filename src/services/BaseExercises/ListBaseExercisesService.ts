import { Inject, Injectable } from "@decorators/di";
import ListBaseExercisesCommand from "../../commands/BaseExercises/ListBaseExercisesCommand";
import IBaseExcercise from "../../models/BaseExercise/IBaseExercise";
import { DocumentQuery } from "mongoose";

@Injectable()
export default class ListBaseExercisesService {

    constructor(@Inject(ListBaseExercisesCommand) private listBaseExercisesCommand: ListBaseExercisesCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public List(): DocumentQuery<IBaseExcercise[], IBaseExcercise> {

        return this.listBaseExercisesCommand.List();
    }
}