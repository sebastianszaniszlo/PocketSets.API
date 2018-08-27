import { Inject, Injectable } from "@decorators/di";
import FindBaseExerciseCommand from "../../commands/BaseExercises/FindBaseExerciseCommand";
import IBaseExcercise from "../../models/BaseExercise/IBaseExercise";
import { DocumentQuery } from "mongoose";

@Injectable()
export default class FindBaseExerciseService {

    constructor(@Inject(FindBaseExerciseCommand) private FindBaseExerciseCommand: FindBaseExerciseCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Find(id: string): DocumentQuery<IBaseExcercise, IBaseExcercise> {

        return this.FindBaseExerciseCommand.Find(id);
    }
}