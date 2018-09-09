import { Inject, Injectable } from "@decorators/di";
import ICreateUserCommand from "../../commands/Users/CreateUserCommand";
import IFindUserByEmailCommand from '../../commands/Users/FindUserByEmailCommand';
import IFindUserbyUsernameCommand from '../../commands/Users/FindUserByUsernameCommand';
import IPasswordHashingService from '../../services/Account/PasswordHashingService';
import RegisterRequest from "../../models/RegisterRequest";
import UserResponse from "../../models/UserResponse";


@Injectable()
export default class RegisterService implements IRegisterService {

    constructor(@Inject(ICreateUserCommand) private CreateUserCommand: ICreateUserCommand,
                @Inject(IFindUserByEmailCommand) private FindUserByEmailCommand: IFindUserByEmailCommand,
                @Inject(IFindUserbyUsernameCommand) private FindUserbyUsernameCommand: IFindUserbyUsernameCommand,
                @Inject(IPasswordHashingService) private PasswordHashingService: IPasswordHashingService) {

    }

    public async Register(request: RegisterRequest): Promise<UserResponse> {
        
        const userByEmail = await this.FindUserByEmailCommand.Find(request.Email);
        const userByUsername = await this.FindUserbyUsernameCommand.Find(request.Username);

        if(userByEmail) {
            throw new Error('Email already in use');
        }

        if(userByUsername) {
            throw new Error('Username taken');
        }

        await this.PasswordHashingService.Hash(request.Password)
                                    .then(hash => {
                                        request.Password = hash;
                                    })
                                    .catch(err => {
                                        throw err;
                                    });

        return await this.CreateUserCommand.Create(request);
    }
}

interface IRegisterService {

    Register(request: RegisterRequest): Promise<UserResponse>;
}