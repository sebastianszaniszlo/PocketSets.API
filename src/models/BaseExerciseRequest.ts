export default class BaseExerciseRequest {

    constructor(public Name: string,
                public DefaultSets?: number,
                public DefaultReps?: number,
                public DefaultWeight?: number,
                public OneRepMax?: number) {

    }
}