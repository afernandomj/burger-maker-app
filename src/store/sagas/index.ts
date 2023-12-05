import { call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as burgerActions from '../actions/Creator';
import { addedItem } from './addItem';
import { removedItem } from './removeItem';
import { getItems } from './getItems';
import { Action } from '@redux-saga/types';

const BURGER_ACTION_HANDLERS = {
	// ADD AN INGREDIENT
	[burgerActions.addItem.type]: addedItem,
	// REMOVE AN INGREDIENT
	[burgerActions.removeItem.type]: removedItem,
	// GET ALL INGREDIENTS
	[burgerActions.getItems.type]: getItems,
};

function* onItemAction(
	action: Action<string>,
	handler: (action: any) => void
): SagaIterator<void> {
	yield call(handler, action);
}

export function* onItemsWatch(): SagaIterator<void> {
	yield takeEvery(
		[
			burgerActions.addItem.type,
			burgerActions.removeItem.type,
			burgerActions.getItems.type,
		],
		(action) => onItemAction(action, BURGER_ACTION_HANDLERS[action.type])
	);
}
