import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { mongoConnectionString } from './config';

class App {

    public ExpressApp: express.Application;
    public Router: express.Router;
    public ConnectionString: string ;

    constructor() {

        this.ExpressApp = express();
        this.Router = express.Router();
        this.Config();
    }

    private Config(): void {

        this.MongoSetup();
        this.Middleware();
        this.ExpressApp.use('/api', this.Router);
    }

    private MongoSetup(): void {

        if(process.env.NODE_ENV == 'production') {
            
            this.ConnectionString = process.env.DB_PROD;
        }
        else {

            this.ConnectionString = mongoConnectionString;
        }

        mongoose.connect(this.ConnectionString, { useNewUrlParser: true });
    }

    private Middleware() : void {

        this.ExpressApp.use(bodyParser.json());
        this.ExpressApp.use(bodyParser.urlencoded({ extended: false }));
    }
}

const app = new App();

export const ExpressApp = app.ExpressApp;
export const Router = app.Router;
