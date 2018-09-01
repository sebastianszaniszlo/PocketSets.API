import { Inject, Injectable } from "@decorators/di";
import IListBaseExercisesCommand from "../../commands/BaseExercises/ListBaseExercisesCommand";
import IListBaseExercisesForCategoryCommand from "../../commands/BaseExercises/ListBaseExercisesForCategoryCommand";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";
import { DocumentQuery } from "mongoose";

@Injectable()
export default class ListBaseExercisesService implements IListBaseExcersisesService {

    constructor(@Inject(IListBaseExercisesCommand) private ListBaseExercisesCommand: IListBaseExercisesCommand,
                @Inject(IListBaseExercisesForCategoryCommand) private ListBaseExercisesForCategoryCommand: IListBaseExercisesForCategoryCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public List(): DocumentQuery<IBaseExcercise[], IBaseExcercise> {

        return this.ListBaseExercisesCommand.List();
    }

    public ListForCategory(categoryId: string): DocumentQuery<IBaseExcercise[], IBaseExcercise> {

        return this.ListBaseExercisesForCategoryCommand.List(categoryId);
    }
}

interface IListBaseExcersisesService {

    List(): DocumentQuery<IBaseExcercise[], IBaseExcercise>
}