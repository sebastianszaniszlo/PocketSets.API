import { Controller, Get, Request, Response, Body, Post } from "@decorators/express";
import { Inject } from "@decorators/di";
import IRegisterService from '../services/Account/RegisterService';
import ILoginService from '../services/Account/LoginService';
import RegisterRequest from "../models/RegisterRequest";
import LoginRequest from "../models/LoginRequest";
import AuthMiddleware from "../middleware/auth-middleware";

@Controller('/account')
export default class CategoriesController {

    constructor(@Inject(IRegisterService) private RegisterService: IRegisterService,
                @Inject(ILoginService) private LoginService: ILoginService) {

    }

    @Get('/me', [AuthMiddleware])
    FetchMe(@Request() req, @Response() res): void {

        res.status(200).json(req.currentUserId);
    }

    @Post('/register')
    Register(@Body() reqBody: RegisterRequest, @Response() res): void {

        this.RegisterService.Register(reqBody)
                            .then(user => {
                                res.status(201).json(user);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
    }

    @Post('/login')
    Login(@Body() reqBody: LoginRequest, @Response() res): void {

        this.LoginService.Login(reqBody)
                            .then(token => {
                                res.status(200).json(token);
                            })
                            .catch(err => {
                                res.status(500).send(err.message);
                            });
        
    }
}