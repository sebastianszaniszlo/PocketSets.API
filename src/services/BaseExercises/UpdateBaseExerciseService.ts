import { Inject, Injectable } from "@decorators/di";
import UpdateBaseExerciseCommand from "../../commands/BaseExercises/UpdateBaseExerciseCommand";
import IBaseExcercise from "../../models/BaseExercise/IBaseExercise";
import { DocumentQuery } from "mongoose";

@Injectable()
export default class UpdateBaseExerciseService {

    constructor(@Inject(UpdateBaseExerciseCommand) private UpdateBaseExerciseCommand: UpdateBaseExerciseCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Update(id: string, request: any): DocumentQuery<IBaseExcercise, IBaseExcercise> {

        return this.UpdateBaseExerciseCommand.Update(id, request);
    }
}