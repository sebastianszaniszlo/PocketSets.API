import { Response, Params, Controller, Get} from '@decorators/express';
import { Injectable } from '@decorators/di';
import { GetBaseExcercise } from '../models/BaseExercise';

@Controller('/baseexcercise')
@Injectable()
export default class BaseExcerciseController {

    constructor() {

    }

    @Get('/')
    GetAll(@Response() res) {

        GetBaseExcercise((err, excercises) => {
            if(err) {
                res.send(err);
            }
            else {
                res.json(excercises);
            }
        });
    }


    // @Get('/:id')
    // Get(@Response() res, @Params('id') id: string) {

    //     res.json(BaseExcercise.findById(id));
    // }
}
