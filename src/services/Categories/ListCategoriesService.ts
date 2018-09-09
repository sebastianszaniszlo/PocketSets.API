import { Inject, Injectable } from "@decorators/di";
import ICategory from "../../data/Categories/ICategory";
import IListCategoriesCommand from '../../commands/Categories/ListCategoriesCommand';

@Injectable()
export default class ListBaseExercisesService implements IListBaseExcersisesService {

    constructor(@Inject(IListCategoriesCommand) private ListCategoriesCommand: IListCategoriesCommand) {

    }

    public async List(userId: string): Promise<Array<ICategory>> {

        return await this.ListCategoriesCommand.List(userId);
    }
}

interface IListBaseExcersisesService {

    List(userId: string): Promise<Array<ICategory>>;
}