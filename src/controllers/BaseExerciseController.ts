import { Response, Params, Controller, Get, Post, Put, Body} from '@decorators/express';
import { Injectable, Inject } from '@decorators/di';
import ListBaseExercisesService from '../services/BaseExercises/ListBaseExercisesService';
import FindBaseExerciseService from '../services/BaseExercises/FindBaseExerciseService';
import CreateBaseExerciseService from '../services/BaseExercises/CreateBaseExerciseService';
import UpdateBaseExerciseService from '../services/BaseExercises/UpdateBaseExerciseService';


@Controller('/baseexercises')
@Injectable()
export default class BaseExerciseController {

    constructor(@Inject(ListBaseExercisesService) private ListBaseExercisesService: ListBaseExercisesService,
                @Inject(FindBaseExerciseService) private FindBaseExerciseService: FindBaseExerciseService,
                @Inject(CreateBaseExerciseService) private CreateBaseExerciseService: CreateBaseExerciseService,
                @Inject(UpdateBaseExerciseService) private UpdateBaseExerciseService: UpdateBaseExerciseService) {

    }

    @Get('/')
    GetAll(@Response() res): void {

        this.ListBaseExercisesService.List()
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }

    @Get('/:id')
    Get(@Response() res, @Params('id') id: string): void {

        this.FindBaseExerciseService.Find(id)
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }

    @Post('/')
    Create(@Body() req, @Response() res): void {

        this.CreateBaseExerciseService.Create(req)
                            .then(data => {
                                res.status(201).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }

    @Put('/:id')
    Update(@Body() req, @Params('id') id: string, @Response() res): void {

        this.UpdateBaseExerciseService.Update(id, req)
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }
}
