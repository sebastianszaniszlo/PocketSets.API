import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import RegisterRequest from '../../models/RegisterRequest';
import IUser from '../../data/Users/IUser';
import { UserMongoModel } from '../../data/Users/UserMongoModel';
import UserResponse from '../../models/UserResponse';

@Injectable()
export default class CreateUserCommand implements ICreateUserCommand {

    constructor(private Collection: Model<IUser>) {
        
        this.Collection = UserMongoModel;
    }

    public async Create(request: RegisterRequest): Promise<UserResponse> {

        const user = await this.Collection.create(request);

        return new UserResponse(
            user._id,
            user.Email,
            user.Username
        );
    }

}

interface ICreateUserCommand {

    Create(request: RegisterRequest): Promise<UserResponse>;
}