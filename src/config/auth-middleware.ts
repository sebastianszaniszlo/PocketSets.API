import { Middleware } from '@decorators/express';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/database-config';

export default class AuthMiddleware implements Middleware {
    
    use(req: Request, res: Response, next: NextFunction) {

        const bearerTokenHeader = req.headers['authorization'];

        if(bearerTokenHeader !== undefined) {
            
            const bearerToken = bearerTokenHeader.split(' ')[1];

            //Verifiy the token
            jwt.verify(bearerToken, secret, (err, user) => {
                if(err) {
                    res.sendStatus(401);
                }
                else {
                    // res.status(200).json(user);
                    next();
                }
            });

        }
        else {
            res.sendStatus(401);
        }
    }

}