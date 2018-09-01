import { Inject, Injectable } from "@decorators/di";
import IFindBaseExerciseCommand from "../../commands/BaseExercises/FindBaseExerciseCommand";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";
import { DocumentQuery } from "mongoose";

@Injectable()
export default class FindBaseExerciseService implements IFindBaseExerciseService {

    constructor(@Inject(IFindBaseExerciseCommand) private FindBaseExerciseCommand: IFindBaseExerciseCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Find(id: string): DocumentQuery<IBaseExcercise, IBaseExcercise> {

        return this.FindBaseExerciseCommand.Find(id);
    }
}

interface IFindBaseExerciseService {

    Find(id: string): DocumentQuery<IBaseExcercise, IBaseExcercise>;
}