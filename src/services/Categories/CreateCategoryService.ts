import { Inject, Injectable } from "@decorators/di";
import ICreateCategoryCommand from "../../commands/Categories/CreateCategoryCommand";
import CategoryRequest from "../../models/CategoryRequest";
import ICategory from "../../data/Categories/ICategory";

@Injectable()
export default class CreateBaseExerciseService implements ICreateBaseExcerciseService {

    constructor(@Inject(ICreateCategoryCommand) private CreateCategoryCommand: ICreateCategoryCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Create(request: CategoryRequest): Promise<ICategory> {

        return this.CreateCategoryCommand.Create(request);
    }
}

interface ICreateBaseExcerciseService {

    Create(request: CategoryRequest): Promise<ICategory>;
}