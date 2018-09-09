import { Response, Request, Params, Controller, Get, Post, Put, Body} from '@decorators/express';
import { Injectable, Inject } from '@decorators/di';
import IListBaseExercisesService from '../services/BaseExercises/ListBaseExercisesService';
import IFindBaseExerciseService from '../services/BaseExercises/FindBaseExerciseService';
import ICreateBaseExerciseService from '../services/BaseExercises/CreateBaseExerciseService';
import IUpdateBaseExerciseService from '../services/BaseExercises/UpdateBaseExerciseService';
import BaseExerciseRequest from '../models/BaseExerciseRequest';
import AuthMiddleware from '../middleware/auth-middleware';


@Controller('/baseexercises', [AuthMiddleware])
@Injectable()
export default class BaseExerciseController {

    constructor(@Inject(IListBaseExercisesService) private ListBaseExercisesService: IListBaseExercisesService,
                @Inject(IFindBaseExerciseService) private FindBaseExerciseService: IFindBaseExerciseService,
                @Inject(ICreateBaseExerciseService) private CreateBaseExerciseService: ICreateBaseExerciseService,
                @Inject(IUpdateBaseExerciseService) private UpdateBaseExerciseService: IUpdateBaseExerciseService) {

    }

    @Get('/')
    GetAll(@Request() req, @Response() res): void {

        this.ListBaseExercisesService.List(req.currentUserId)
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }

    @Get('/bycategory/:categoryId')
    GetAllForCategory(@Request() req, @Response() res, @Params('categoryId') categoryId: string): void {

        this.ListBaseExercisesService.ListForCategory(req.currentUserId, categoryId)
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }

    @Get('/:id')
    Get(@Response() res, @Params('id') id: string): void {

        this.FindBaseExerciseService.Find(id)
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }

    @Post('/')
    Create(@Request() req, @Body() reqBody: BaseExerciseRequest, @Response() res): void {

        this.CreateBaseExerciseService.Create(req.currentUserId, reqBody)
                            .then(data => {
                                res.status(201).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }

    @Put('/:id')
    Update(@Body() reqBody: BaseExerciseRequest, @Params('id') id: string, @Response() res): void {

        this.UpdateBaseExerciseService.Update(id, reqBody)
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }
}
