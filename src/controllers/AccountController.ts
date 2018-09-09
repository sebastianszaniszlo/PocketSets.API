import { Controller, Get, Request, Response, Body, Post } from "@decorators/express";
import { Inject } from "@decorators/di";
import IRegisterService from '../services/Account/RegisterService';
import ILoginService from '../services/Account/LoginService';
import UserRequest from "../models/RegisterRequest";
import LoginRequest from "../models/LoginRequest";
import AuthMiddleware from "../middleware/auth-middleware";

@Controller('/account')
export default class CategoriesController {

    constructor(@Inject(IRegisterService) private registerService: IRegisterService,
                @Inject(ILoginService) private loginService: ILoginService) {

    }

    @Get('/me', [AuthMiddleware])
    FetchMe(@Request() req, @Response() res): void {

        res.status(200).json(req.currentUserId);
    }

    @Post('/register')
    Register(@Body() reqBody: UserRequest, @Response() res): void {

        this.registerService.Register(reqBody)
                            .then(user => {
                                res.status(201).json(user);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }

    @Post('/login')
    Login(@Body() reqBody: LoginRequest, @Response() res): void {

        this.loginService.Login(reqBody)
                            .then(token => {
                                res.status(200).json(token);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
        
    }
}