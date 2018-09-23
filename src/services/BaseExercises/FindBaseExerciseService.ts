import { Inject, Injectable } from "@decorators/di";
import IFindBaseExerciseCommand from "../../commands/BaseExercises/FindBaseExerciseCommand";
import IBaseExercise from "../../data/BaseExercises/IBaseExercise";

@Injectable()
export default class FindBaseExerciseService implements IFindBaseExerciseService {

    constructor(@Inject(IFindBaseExerciseCommand) private FindBaseExerciseCommand: IFindBaseExerciseCommand) {

    }

    public async Find(id: string): Promise<IBaseExercise> {

        return await this.FindBaseExerciseCommand.Find(id);
    }
}

interface IFindBaseExerciseService {

    Find(id: string): Promise<IBaseExercise>;
}