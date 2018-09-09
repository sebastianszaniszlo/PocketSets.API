import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import { UserMongoModel } from '../../data/Users/UserMongoModel';
import IUser from '../../data/Users/IUser';

@Injectable()
export default class FindUserByIdCommand implements IFindUserByIdCommand {

    constructor(private Collection: Model<IUser>) {
        
        this.Collection = UserMongoModel;
    }

    public async Find(id: string) : Promise<IUser> {

        return await this.Collection.findById(id);
    }

}

interface IFindUserByIdCommand {

    Find(id: string) : Promise<IUser>;
}