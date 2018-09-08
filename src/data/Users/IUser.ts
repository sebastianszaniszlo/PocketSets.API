import { Document } from 'mongoose';

export default interface IUser extends Document {

    FirstName: string,
    LastName: string,
    Username: string,
    Email: string,
    Password: string
    
}