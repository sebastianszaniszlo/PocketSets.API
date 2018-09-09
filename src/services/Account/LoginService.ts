import { Inject, Injectable } from "@decorators/di";
import LoginRequest from "../../models/LoginRequest";
import IFindUserByEmailCommand from '../../commands/Users/FindUserByEmailCommand';
import IPasswordComparisonService from '../../services/Account/PasswordComparisonService';
import ITokenService from '../Account/TokenService';
import TokenResponse from "../../models/TokenResponse";

@Injectable()
export default class LoginService implements ILoginService {

    constructor(@Inject(IFindUserByEmailCommand) private FindUserByEmailCommand: IFindUserByEmailCommand,
                @Inject(IPasswordComparisonService) private PasswordComparisonService: IPasswordComparisonService,
                @Inject(ITokenService) private TokenService: ITokenService) {

    }

    public async Login(request: LoginRequest): Promise<TokenResponse> {

        const user = await this.FindUserByEmailCommand.Find(request.Email);
        
        if(!user) {
            throw new Error('User not found');
        }

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