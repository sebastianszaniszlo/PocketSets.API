import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

class App {

    public ExpressApp: express.Application;

    constructor() {

        this.ExpressApp = express();
        this.Config();
    }

    private Config(): void {

        this.ExpressApp.use(bodyParser.json());
        this.ExpressApp.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().ExpressApp;