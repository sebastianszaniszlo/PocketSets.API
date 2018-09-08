import { Schema, Model, model } from 'mongoose';
import ICategory from './ICategory';

export const CategorySchema: Schema = new Schema({

    Name: {
        type: String,
        required: true
    },
    UserId: {
        type: Schema.Types.ObjectId,
        required: true
    }

});

export const CategoryMongoModel: Model<ICategory> = model<ICategory>('Category', CategorySchema);