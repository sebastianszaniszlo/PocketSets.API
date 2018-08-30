import { Controller, Get, Response } from "@decorators/express";
import { Inject } from "@decorators/di";
import IListCategoriesService from '../services/Categories/ListCategoriesService';

@Controller('/categories')
export default class CategoriesController {

    constructor(@Inject(IListCategoriesService) private listCategoriesService: IListCategoriesService) {

    }

    @Get('')
    GetAll(@Response() res): void {

        this.listCategoriesService.List()
                                .then(data => {
                                    res.status(200).json(data);
                                })
                                .catch(err => {
                                    res.status(500).send(err);
                                });
    }
}