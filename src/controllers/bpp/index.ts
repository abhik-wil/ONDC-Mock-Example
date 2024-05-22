import {Router} from 'express';
import {onCancelController} from './onCancel.ts';
import {onConfirmController} from './onConfirm.ts';
import {onInitController} from './onInit.ts';
import {onSearchController} from './onSearch.ts';
import {onSelectController} from './onSelect.ts';
import {onStatusController} from './onStatus.ts';
import {onUpdateController} from './onUpdate.ts';

export const bppRouter = Router();

bppRouter.post('/on_search', onSearchController);
bppRouter.post('/on_select', onSelectController);
bppRouter.post('/on_init', onInitController);
bppRouter.post('/on_confirm', onConfirmController);
bppRouter.post('/on_cancel', onCancelController);
bppRouter.post('/on_status', onStatusController);
bppRouter.post('/on_update', onUpdateController);
