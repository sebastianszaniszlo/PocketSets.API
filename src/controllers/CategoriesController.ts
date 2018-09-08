import { Controller, Get, Response, Body, Post, Middleware } from "@decorators/express";
import { Inject } from "@decorators/di";
import IListCategoriesService from '../services/Categories/ListCategoriesService';
import ICreateCategoryService from '../services/Categories/CreateCategoryService';
import CategoryRequest from "../models/CategoryRequest";
import AuthMiddleware from '../config/auth-middleware';

@Controller('/categories', [AuthMiddleware])
export default class CategoriesController {

    constructor(@Inject(IListCategoriesService) private listCategoriesService: IListCategoriesService,
                @Inject(ICreateCategoryService) private createCategoryService: ICreateCategoryService) {

    }

    @Get('/')
    GetAll(@Response() res): void {

        this.listCategoriesService.List()
                                .then(data => {
                                    res.status(200).json(data);
                                })
                                .catch(err => {
                                    res.status(500).send(err);
                                });
    }

    @Post('/')
    Create(@Body() req: CategoryRequest, @Response() res): void {

        this.createCategoryService.Create(req)
                            .then(data => {
                                res.status(201).json(data);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }
}