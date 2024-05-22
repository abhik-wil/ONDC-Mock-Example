import {Router} from 'express';
import {searchController} from './search.ts';
import {selectController} from './select.ts';
import {cancelController} from './cancel.ts';
import {confirmController} from './confirm.ts';
import {initController} from './init.ts';
import {statusController} from './status.ts';
import {updateController} from './update.ts';

export const bapRouter = Router();

bapRouter.post('/search', searchController);
bapRouter.post('/select', selectController);
bapRouter.post('/init', initController);
bapRouter.post('/confirm', confirmController);
bapRouter.post('/cancel', cancelController);
bapRouter.post('/status', statusController);
bapRouter.post('/update', updateController);
