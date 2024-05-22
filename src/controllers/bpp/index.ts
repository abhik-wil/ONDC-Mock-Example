import {Router} from 'express';
import {onCancelController} from './onCancel';
import {onConfirmController} from './onConfirm';
import {onInitController} from './onInit';
import {onSearchController} from './onSearch';
import {onSelectController} from './onSelect';
import {onStatusController} from './onStatus';
import {onUpdateController} from './onUpdate';

export const bppRouter = Router();

bppRouter.post('/on_search', onSearchController);
bppRouter.post('/on_select', onSelectController);
bppRouter.post('/on_init', onInitController);
bppRouter.post('/on_confirm', onConfirmController);
bppRouter.post('/on_cancel', onCancelController);
bppRouter.post('/on_status', onStatusController);
bppRouter.post('/on_update', onUpdateController);
