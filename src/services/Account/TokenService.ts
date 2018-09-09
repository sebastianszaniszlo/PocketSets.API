import { Injectable } from "@decorators/di";
import IUser from "../../data/Users/IUser";
import * as Jwt from 'jsonwebtoken';
import { secret } from '../../config/database-config';
import TokenResponse from "../../models/TokenResponse";
import UserResponse from "../../models/UserResponse";

@Injectable()
export default class TokenService implements ITokenService {

    public async Create(user: IUser, expiresIn?: number): Promise<TokenResponse> {
        
        const userPayload = new UserResponse(user._id, user.Email, user.Username);
        //Jwt sign needs a plain object
        const token = Jwt.sign({ user: userPayload }, secret, {
            expiresIn: 3600 //1 hour
        });


        return Promise.resolve(new TokenResponse(token, userPayload));
    }
}

interface ITokenService {

    Create(user: IUser, expiresIn?: number): Promise<TokenResponse>;
}