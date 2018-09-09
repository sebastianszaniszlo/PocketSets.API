import { Inject, Injectable } from "@decorators/di";
import LoginRequest from "../../models/LoginRequest";
import IFindUserByEmailCommand from '../../commands/Users/FindUserByEmailCommand';
import IFindUserByUsernameCommand from '../../commands/Users/FindUserByUsernameCommand';
import IPasswordComparisonService from '../../services/Account/PasswordComparisonService';
import ITokenService from '../Account/TokenService';
import TokenResponse from "../../models/TokenResponse";

@Injectable()
export default class LoginService implements ILoginService {

    constructor(@Inject(IFindUserByEmailCommand) private FindUserByEmailCommand: IFindUserByEmailCommand,
                @Inject(IFindUserByUsernameCommand) private FindUserByUsernameCommand: IFindUserByUsernameCommand,
                @Inject(IPasswordComparisonService) private PasswordComparisonService: IPasswordComparisonService,
                @Inject(ITokenService) private TokenService: ITokenService) {

    }

    public async Login(request: LoginRequest): Promise<TokenResponse> {

        const userByEmail = await this.FindUserByEmailCommand.Find(request.EmailOrUsername);
        const userByUsername = await this.FindUserByUsernameCommand.Find(request.EmailOrUsername);
        
        if(!userByEmail && !userByUsername) {
            throw new Error('User not found');
        }

        const user = userByEmail ? userByEmail : userByUsername;

        const isMatch = await this.PasswordComparisonService.Compare(request.Password, user.Password);

        if(isMatch) {
            return await this.TokenService.Create(user);
        }
        else {
            throw new Error('Wrong password');
        }
    }
}

interface ILoginService {

    Login(request: LoginRequest): Promise<TokenResponse>;
}