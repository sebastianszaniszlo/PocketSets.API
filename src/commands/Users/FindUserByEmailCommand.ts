import { Model, DocumentQuery } from 'mongoose';
import { Injectable } from '@decorators/di';
import { UserMongoModel } from '../../data/Users/UserMongoModel';
import IUser from '../../data/Users/IUser';

@Injectable()
export default class FindUserByEmailCommand implements IFindUserByEmailCommand {

    constructor(private Collection: Model<IUser>) {
        
        this.Collection = UserMongoModel;
    }

    public Find(email: string) : DocumentQuery<IUser, IUser> {

        return this.Collection.findOne({ Email: email});
    }

}

interface IFindUserByEmailCommand {

    Find(email: string) : DocumentQuery<IUser, IUser>;
}