import { Model, DocumentQuery } from 'mongoose';
import ICategory from '../../data/Categories/ICategory';
import { Injectable } from '@decorators/di';
import { CategoryMongoModel } from '../../data/Categories/CategoryMongoModel';

@Injectable()
export default class ListCategoriesCommand implements IListCategoriesCommand {

    constructor(private Collection: Model<ICategory>) {
        
        this.Collection = CategoryMongoModel;
    }

    public List(): DocumentQuery<ICategory[], ICategory> {

        return this.Collection.find();
    }

}

interface IListCategoriesCommand {

    List(): DocumentQuery<ICategory[], ICategory>;
}