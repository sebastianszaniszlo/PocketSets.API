import App from './app';
import { attachControllers } from '@decorators/express';
import BaseExerciseController from './controllers/BaseExerciseController';

const PORT = 3000;

attachControllers(App, [BaseExerciseController])

App.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});