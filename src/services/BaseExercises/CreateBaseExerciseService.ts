import { Inject, Injectable } from "@decorators/di";
import ICreateBaseExerciseCommand from "../../commands/BaseExercises/CreateBaseExerciseCommand";
import BaseExerciseRequest from "../../models/BaseExerciseRequest";
import IBaseExercise from "../../data/BaseExercises/IBaseExercise";

@Injectable()
export default class CreateBaseExerciseService implements ICreateBaseExerciseService {

    constructor(@Inject(ICreateBaseExerciseCommand) private CreateBaseExerciseCommand: ICreateBaseExerciseCommand) {

    }

    public async Create(userId:string, request: BaseExerciseRequest): Promise<IBaseExercise> {

        return await this.CreateBaseExerciseCommand.Create(userId, request);
    }
}

interface ICreateBaseExerciseService {

    Create(userId: string, request: BaseExerciseRequest): Promise<IBaseExercise>;
}