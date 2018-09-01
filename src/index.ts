import { ExpressApp, Router } from './app';
import { attachControllers } from '@decorators/express';
import BaseExerciseController from './controllers/BaseExerciseController';
import CategoriesController from './controllers/CategoriesController';

const PORT = process.env.PORT || 3000;

attachControllers(Router, [BaseExerciseController, CategoriesController])

ExpressApp.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});