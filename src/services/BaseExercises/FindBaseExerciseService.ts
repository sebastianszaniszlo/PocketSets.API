import { Inject, Injectable } from "@decorators/di";
import IFindBaseExerciseCommand from "../../commands/BaseExercises/FindBaseExerciseCommand";
import IBaseExcercise from "../../data/BaseExercises/IBaseExercise";

@Injectable()
export default class FindBaseExerciseService implements IFindBaseExerciseService {

    constructor(@Inject(IFindBaseExerciseCommand) private FindBaseExerciseCommand: IFindBaseExerciseCommand) {

    }

    public async Find(id: string): Promise<IBaseExcercise> {

        return await this.FindBaseExerciseCommand.Find(id);
    }
}

interface IFindBaseExerciseService {

    Find(id: string): Promise<IBaseExcercise>;
}