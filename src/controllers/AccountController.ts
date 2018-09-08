import { Controller, Get, Response, Body, Post } from "@decorators/express";
import { Inject } from "@decorators/di";
import IRegisterService from '../services/Account/RegisterService';
import ILoginService from '../services/Account/LoginService';
import UserRequest from "../models/RegisterRequest";
import LoginRequest from "../models/LoginRequest";

@Controller('/account')
export default class CategoriesController {

    constructor(@Inject(IRegisterService) private registerService: IRegisterService,
                @Inject(ILoginService) private loginService: ILoginService) {

    }

    @Post('/register')
    Register(@Body() req: UserRequest, @Response() res): void {

        this.registerService.Register(req)
                            .then(user => {
                                res.status(201).json(user);
                            })
                            .catch(err => {
                                res.status(500).send(err);
                            });
    }

    @Post('/login')
    Login(@Body() req: LoginRequest, @Response() res): void {

        try {
            this.loginService.Login(req)
                            .then(token => {
                                res.status(200).json(token);
                            })
                            .catch(err => {
                                console.log('ERROR', err)
                                res.status(500).json(err).send(err);
                            });
        }
        catch(err) {
            res.status(500).send(err);
        }
        
    }
}