import { Controller, Get, Request, Response, Body, Post } from "@decorators/express";
import { Inject } from "@decorators/di";
import IListCategoriesService from '../services/Categories/ListCategoriesService';
import ICreateCategoryService from '../services/Categories/CreateCategoryService';
import CategoryRequest from "../models/CategoryRequest";
import AuthMiddleware from '../middleware/auth-middleware';


@Controller('/categories', [AuthMiddleware])
export default class CategoriesController {

    constructor(@Inject(IListCategoriesService) private ListCategoriesService: IListCategoriesService,
                @Inject(ICreateCategoryService) private CreateCategoryService: ICreateCategoryService) {

    }

    @Get('/')
    GetAll(@Request() req, @Response() res): void {

        this.ListCategoriesService.List(req.currentUserId)
                                .then(data => {
                                    res.status(200).json(data);
                                })
                                .catch(err => {
                                    res.status(500).send(err.message);
                                });
    }

    @Post('/')
    Create(@Request() req, @Body() reqBody: CategoryRequest, @Response() res): void {

        this.CreateCategoryService.Create(req.currentUserId, reqBody)
                            .then(data => {
                                res.status(201).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }
}