import { Injectable } from "@decorators/di";
import * as bcrypt from 'bcrypt';

@Injectable()
export default class PasswordComparisonService implements IPasswordComparisonService {

    public Compare(password: string, hash: string): Promise<boolean> {

        return bcrypt.compare(password, hash);
    }
}

interface IPasswordComparisonService {

    Compare(password: string, hash: string): Promise<boolean>;
}