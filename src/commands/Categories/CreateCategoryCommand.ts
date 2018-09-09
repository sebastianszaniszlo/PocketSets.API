import { Model } from 'mongoose';
import { Injectable } from '@decorators/di';
import CategoryRequest from '../../models/CategoryRequest';
import ICategory from '../../data/Categories/ICategory';
import { CategoryMongoModel } from '../../data/Categories/CategoryMongoModel';

@Injectable()
export default class CreateCategoryCommand implements ICreateCategoryCommand{

    constructor(private Collection: Model<ICategory>) {
        
        this.Collection = CategoryMongoModel;
    }

    public async Create(userId: string, request: CategoryRequest): Promise<ICategory> {

        return await this.Collection.create({
            Name: request.Name,
            UserId: userId
        });
    }

}

interface ICreateCategoryCommand {

    Create(userId: string, request: CategoryRequest): Promise<ICategory>;
}