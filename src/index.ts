import { ExpressApp, Router } from './app';
import { attachControllers } from '@decorators/express';
import BaseExerciseController from './controllers/BaseExerciseController';

const PORT = 3000;

attachControllers(Router, [BaseExerciseController])

ExpressApp.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});