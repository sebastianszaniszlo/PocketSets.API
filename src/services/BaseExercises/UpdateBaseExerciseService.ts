import { Inject, Injectable } from "@decorators/di";
import IUpdateBaseExerciseCommand from "../../commands/BaseExercises/UpdateBaseExerciseCommand";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";
import BaseExerciseRequest from "../../models/BaseExerciseRequest";

@Injectable()
export default class UpdateBaseExerciseService implements IUpdateBaseExerciseService{

    constructor(@Inject(IUpdateBaseExerciseCommand) private UpdateBaseExerciseCommand: IUpdateBaseExerciseCommand) {

    }

    public async Update(id: string, request: BaseExerciseRequest): Promise<IBaseExcercise> {

        return await this.UpdateBaseExerciseCommand.Update(id, request);
    }
}

interface IUpdateBaseExerciseService {

    Update(id: string, request: BaseExerciseRequest): Promise<IBaseExcercise>;
}