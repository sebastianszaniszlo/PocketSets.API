import { Schema, Model, model } from 'mongoose';
import IUser from './IUser';

export const UserSchema: Schema = new Schema({

    FirstName: String,
    LastName: String,
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }

});

export const UserMongoModel: Model<IUser> = model<IUser>('User', UserSchema);