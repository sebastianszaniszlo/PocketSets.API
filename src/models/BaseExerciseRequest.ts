export default class BaseExerciseRequest {

    constructor(public Name: string,
                public CategoryId: string,
                public UserId: string,
                public DefaultSets?: number,
                public DefaultReps?: number,
                public DefaultWeight?: number,
                public OneRepMax?: number) {

    }
}