import { Inject, Injectable } from "@decorators/di";
import ICategory from "../../data/Categories/ICategory";
import { DocumentQuery } from "mongoose";
import IListCategoriesCommand from '../../commands/Categories/ListCategoriesCommand';

@Injectable()
export default class ListBaseExercisesService implements IListBaseExcersisesService {

    constructor(@Inject(IListCategoriesCommand) private listCategoriesCommand: IListCategoriesCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public List(): DocumentQuery<ICategory[], ICategory> {

        return this.listCategoriesCommand.List();
    }
}

interface IListBaseExcersisesService {

    List(): DocumentQuery<ICategory[], ICategory>
}