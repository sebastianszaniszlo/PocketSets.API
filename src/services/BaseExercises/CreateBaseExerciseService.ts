import { Inject, Injectable } from "@decorators/di";
import ICreateBaseExerciseCommand from "../../commands/BaseExercises/CreateBaseExerciseCommand";
import BaseExerciseRequest from "../../models/BaseExerciseRequest";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";

@Injectable()
export default class CreateBaseExerciseService implements ICreateBaseExcerciseService {

    constructor(@Inject(ICreateBaseExerciseCommand) private CreateBaseExerciseCommand: ICreateBaseExerciseCommand) {

    }

    public async Create(userId:string, request: BaseExerciseRequest): Promise<IBaseExcercise> {

        return await this.CreateBaseExerciseCommand.Create(userId, request);
    }
}

interface ICreateBaseExcerciseService {

    Create(userId: string, request: BaseExerciseRequest): Promise<IBaseExcercise>;
}