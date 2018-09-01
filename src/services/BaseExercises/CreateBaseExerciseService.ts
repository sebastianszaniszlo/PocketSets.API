import { Inject, Injectable } from "@decorators/di";
import ICreateBaseExerciseCommand from "../../commands/BaseExercises/CreateBaseExerciseCommand";
import BaseExerciseRequest from "../../models/BaseExerciseRequest";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";

@Injectable()
export default class CreateBaseExerciseService implements ICreateBaseExcerciseService {

    constructor(@Inject(ICreateBaseExerciseCommand) private CreateBaseExerciseCommand: ICreateBaseExerciseCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Create(request: BaseExerciseRequest): Promise<IBaseExcercise> {

        return this.CreateBaseExerciseCommand.Create(request);
    }
}

interface ICreateBaseExcerciseService {

    Create(request: BaseExerciseRequest): Promise<IBaseExcercise>;
}