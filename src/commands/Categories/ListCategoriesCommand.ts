import { Model } from 'mongoose';
import ICategory from '../../data/Categories/ICategory';
import { Injectable } from '@decorators/di';
import { CategoryMongoModel } from '../../data/Categories/CategoryMongoModel';

@Injectable()
export default class ListCategoriesCommand implements IListCategoriesCommand {

    constructor(private Collection: Model<ICategory>) {
        
        this.Collection = CategoryMongoModel;
    }

    public async List(userId: string): Promise<Array<ICategory>> {

        return await this.Collection.find({
            UserId: userId
        });
    }

}

interface IListCategoriesCommand {

    List(userId: string): Promise<Array<ICategory>>;
}