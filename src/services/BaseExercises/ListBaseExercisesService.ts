import { Inject, Injectable } from "@decorators/di";
import IListBaseExercisesCommand from "../../commands/BaseExercises/ListBaseExercisesCommand";
import IListBaseExercisesForCategoryCommand from "../../commands/BaseExercises/ListBaseExercisesForCategoryCommand";
import IBaseExercise from "../../data/BaseExercises/IBaseExercise";

@Injectable()
export default class ListBaseExercisesService implements IListBaseExcersisesService {

    constructor(@Inject(IListBaseExercisesCommand) private ListBaseExercisesCommand: IListBaseExercisesCommand,
                @Inject(IListBaseExercisesForCategoryCommand) private ListBaseExercisesForCategoryCommand: IListBaseExercisesForCategoryCommand) {

    }

    public async List(userId: string): Promise<Array<IBaseExercise>> {

        return await this.ListBaseExercisesCommand.List(userId);
    }

    public async ListForCategory(userId: string, categoryId: string): Promise<Array<IBaseExercise>> {

        return await this.ListBaseExercisesForCategoryCommand.List(userId, categoryId);
    }
}

interface IListBaseExcersisesService {

    List(userId: string): Promise<Array<IBaseExercise>>;
    ListForCategory(userId: string, categoryId: string): Promise<Array<IBaseExercise>>;
}