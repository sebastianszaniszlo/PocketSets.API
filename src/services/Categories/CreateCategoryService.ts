import { Inject, Injectable } from "@decorators/di";
import ICreateCategoryCommand from "../../commands/Categories/CreateCategoryCommand";
import CategoryRequest from "../../models/CategoryRequest";
import ICategory from "../../data/Categories/ICategory";

@Injectable()
export default class CreateBaseExerciseService implements ICreateBaseExerciseService {

    constructor(@Inject(ICreateCategoryCommand) private CreateCategoryCommand: ICreateCategoryCommand) {

    }

    public async Create(userId: string, request: CategoryRequest): Promise<ICategory> {

        return await this.CreateCategoryCommand.Create(userId, request);
    }
}

interface ICreateBaseExerciseService {

    Create(userId: string, request: CategoryRequest): Promise<ICategory>;
}