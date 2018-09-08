import { Inject, Injectable } from "@decorators/di";
import ICreateUserCommand from "../../commands/Users/CreateUserCommand";
import IPasswordHashingService from '../../services/Account/PasswordHashingService';
import RegisterRequest from "../../models/RegisterRequest";
import IUser from "../../data/Users/IUser";


@Injectable()
export default class RegisterService implements IRegisterService {

    constructor(@Inject(ICreateUserCommand) private CreateUserCommand: ICreateUserCommand,
                @Inject(IPasswordHashingService) private PasswordHashingService: IPasswordHashingService) {

    }

    public async Register(request: RegisterRequest): Promise<IUser> {
        
        //TO DO(Seb): check if existing user

        await this.PasswordHashingService.Hash(request.Password)
                                    .then(hash => {
                                        request.Password = hash;
                                    })
                                    .catch(err => {
                                        throw err;
                                    });

        return this.CreateUserCommand.Create(request);
    }
}

interface IRegisterService {

    Register(request: RegisterRequest): Promise<IUser>;
}