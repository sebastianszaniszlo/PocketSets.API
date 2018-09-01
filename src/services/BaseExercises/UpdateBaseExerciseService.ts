import { Inject, Injectable } from "@decorators/di";
import IUpdateBaseExerciseCommand from "../../commands/BaseExercises/UpdateBaseExerciseCommand";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";
import { DocumentQuery } from "mongoose";
import BaseExerciseRequest from "../../models/BaseExerciseRequest";

@Injectable()
export default class UpdateBaseExerciseService implements IUpdateBaseExerciseService{

    constructor(@Inject(IUpdateBaseExerciseCommand) private UpdateBaseExerciseCommand: IUpdateBaseExerciseCommand) {

    }

    //TO DO: pass in user id when we have authentication
    public Update(id: string, request: BaseExerciseRequest): DocumentQuery<IBaseExcercise, IBaseExcercise> {

        return this.UpdateBaseExerciseCommand.Update(id, request);
    }
}

interface IUpdateBaseExerciseService {

    Update(id: string, request: BaseExerciseRequest): DocumentQuery<IBaseExcercise, IBaseExcercise>
}