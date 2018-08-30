import { Inject, Injectable } from "@decorators/di";
import CreateBaseExerciseCommand from "../../commands/BaseExercises/CreateBaseExerciseCommand";
import BaseExerciseRequest from "../../models/BaseExerciseRequest";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";

@Injectable()
export default class CreateBaseExerciseService implements ICreateBaseExcerciseService {

    constructor(@Inject(CreateBaseExerciseCommand) private CreateBaseExerciseCommand: CreateBaseExerciseCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Create(request: BaseExerciseRequest): Promise<IBaseExcercise> {

        return this.CreateBaseExerciseCommand.Create(request);
    }
}

interface ICreateBaseExcerciseService {

    Create(request: BaseExerciseRequest): Promise<IBaseExcercise>;
}