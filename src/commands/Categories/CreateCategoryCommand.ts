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

    public Create(request: CategoryRequest): Promise<ICategory> {

        return this.Collection.create(request);
    }

}

interface ICreateCategoryCommand {

    Create(request: CategoryRequest): Promise<ICategory>;
}