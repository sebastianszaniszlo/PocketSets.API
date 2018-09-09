import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import { UserMongoModel } from '../../data/Users/UserMongoModel';
import IUser from '../../data/Users/IUser';

@Injectable()
export default class FindUserByEmailCommand implements IFindUserByEmailCommand {

    constructor(private Collection: Model<IUser>) {
        
        this.Collection = UserMongoModel;
    }

    public async Find(username: string) : Promise<IUser> {

        return await this.Collection.findOne({
            Username: username
        });
    }

}

interface IFindUserByEmailCommand {

    Find(username: string) : Promise<IUser>;
}