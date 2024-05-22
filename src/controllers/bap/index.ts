import {Router} from 'express';
import {searchController} from './search';
import {selectController} from './select';
import {cancelController} from './cancel';
import {confirmController} from './confirm';
import {initController} from './init';
import {statusController} from './status';
import {updateController} from './update';

export const bapRouter = Router();

bapRouter.post('/search', searchController);
bapRouter.post('/select', selectController);
bapRouter.post('/init', initController);
bapRouter.post('/confirm', confirmController);
bapRouter.post('/cancel', cancelController);
bapRouter.post('/status', statusController);
bapRouter.post('/update', updateController);
