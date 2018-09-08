import { ExpressApp, Router } from './app';
import { attachControllers } from '@decorators/express';
import BaseExerciseController from './controllers/BaseExerciseController';
import CategoriesController from './controllers/CategoriesController';
import AccountController from './controllers/AccountController';

const PORT = process.env.PORT || 3000;

attachControllers(Router, [BaseExerciseController,
                            CategoriesController,
                            AccountController])

ExpressApp.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});