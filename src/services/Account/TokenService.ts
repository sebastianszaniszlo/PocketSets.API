import { Injectable } from "@decorators/di";
import IUser from "../../data/Users/IUser";
import * as Jwt from 'jsonwebtoken';
import { secret } from '../../config/database-config';

@Injectable()
export default class TokenService implements ITokenService {

    public async Create(user: IUser, expiresIn?: number): Promise<string> {
        
        //Jwt sign needs a plain object
        //TO DO(Seb): don't put an IUser objecct in the payload(it ccontns the password hash)
        const token = Jwt.sign({user: user}, secret, {
            expiresIn: 3600 //1 hour
        });

        return Promise.resolve(token);
    }
}

interface ITokenService {

    Create(user: IUser, expiresIn?: number): Promise<string>;
}