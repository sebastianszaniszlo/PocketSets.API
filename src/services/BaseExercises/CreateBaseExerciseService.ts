import { Inject, Injectable } from "@decorators/di";
import CreateBaseExerciseCommand from "../../commands/BaseExercises/CreateBaseExerciseCommand";
import IBaseExcercise from "../../models/BaseExercise/IBaseExercise";

@Injectable()
export default class CreateBaseExerciseService {

    constructor(@Inject(CreateBaseExerciseCommand) private CreateBaseExerciseCommand: CreateBaseExerciseCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Create(request: any): Promise<IBaseExcercise> {

        return this.CreateBaseExerciseCommand.Create(request);
    }
}