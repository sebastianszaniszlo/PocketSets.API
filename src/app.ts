import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

class App {

    public ExpressApp: express.Application;
    public mongoUrl: string = 'mongodb://localhost:27017/pocket-sets';

    constructor() {

        this.ExpressApp = express();
        this.Config();
    }

    private Config(): void {

        this.MongoSetup();
        this.ExpressApp.use(bodyParser.json());
        this.ExpressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    private MongoSetup(): void {

        mongoose.connect(this.mongoUrl);
    }
}

export default new App().ExpressApp;