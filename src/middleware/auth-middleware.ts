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
            jwt.verify(bearerToken, secret, (err, storedClaims) => {
                if(err) {
                    res.sendStatus(401);
                }
                else {
                    // The jwt payload contains a user field and some other stuff and it is set as a plain
                    // object in TokenService
                    //@ts-ignore
                    const currentUserId = storedClaims.user.Id; //user is of type UserResponse
                    if(currentUserId !== undefined) {
                        //put the currentUserId on the request object so we can access it in any controller action
                        //@ts-ignore
                        req.currentUserId = currentUserId;
                        next();
                    }
                    else {
                        res.sendStatus(404);
                    }
                }
            });

        }
        else {
            res.sendStatus(401);
        }
    }

}