import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import RegisterRequest from '../../models/RegisterRequest';
import IUser from '../../data/Users/IUser';
import { UserMongoModel } from '../../data/Users/UserMongoModel';

@Injectable()
export default class CreateUserCommand implements ICreateUserCommand {

    constructor(private Collection: Model<IUser>) {
        
        this.Collection = UserMongoModel;
    }

    public async Create(request: RegisterRequest): Promise<IUser> {

        return await this.Collection.create(request);
    }

}

interface ICreateUserCommand {

    Create(request: RegisterRequest): Promise<IUser>;
}