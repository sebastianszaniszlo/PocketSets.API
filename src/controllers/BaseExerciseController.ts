import { Response, Params, Controller, Get, Post, Put, Body} from '@decorators/express';
import { Injectable, Inject } from '@decorators/di';
import IListBaseExercisesService from '../services/BaseExercises/ListBaseExercisesService';
import IFindBaseExerciseService from '../services/BaseExercises/FindBaseExerciseService';
import ICreateBaseExerciseService from '../services/BaseExercises/CreateBaseExerciseService';
import IUpdateBaseExerciseService from '../services/BaseExercises/UpdateBaseExerciseService';
import BaseExerciseRequest from '../models/BaseExerciseRequest';
import AuthMiddleware from '../config/auth-middleware';


@Controller('/baseexercises', [AuthMiddleware])
@Injectable()
export default class BaseExerciseController {

    constructor(@Inject(IListBaseExercisesService) private ListBaseExercisesService: IListBaseExercisesService,
                @Inject(IFindBaseExerciseService) private FindBaseExerciseService: IFindBaseExerciseService,
                @Inject(ICreateBaseExerciseService) private CreateBaseExerciseService: ICreateBaseExerciseService,
                @Inject(IUpdateBaseExerciseService) private UpdateBaseExerciseService: IUpdateBaseExerciseService) {

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

    @Get('/bycategory/:categoryId')
    GetAllForCategory(@Response() res, @Params('categoryId') categoryId: string): void {

        this.ListBaseExercisesService.ListForCategory(categoryId)
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
    Create(@Body() req: BaseExerciseRequest, @Response() res): void {

        this.CreateBaseExerciseService.Create(req)
                            .then(data => {
                                res.status(201).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }

    @Put('/:id')
    Update(@Body() req: BaseExerciseRequest, @Params('id') id: string, @Response() res): void {

        this.UpdateBaseExerciseService.Update(id, req)
                            .then(data => {
                                res.status(200).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }
}
