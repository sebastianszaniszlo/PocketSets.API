import App from './app';
import { attachControllers } from '@decorators/express';
import BaseExcerciseController from './controllers/BaseExcerciseController';

const PORT = 3000;

attachControllers(App, [BaseExcerciseController])

App.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});