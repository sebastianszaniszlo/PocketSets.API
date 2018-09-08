import { Injectable } from "@decorators/di";
import * as bcrypt from 'bcrypt';

@Injectable()
export default class PasswordHashingService implements IPasswordHashingService {

    public Hash(password: string): Promise<string> {

        return bcrypt.hash(password, 10);
    }
}

interface IPasswordHashingService {

    Hash(password: string): Promise<string>;
}