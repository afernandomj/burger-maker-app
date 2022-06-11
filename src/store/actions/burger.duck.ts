import {
	actionChannel,
	call,
	fork,
	put,
	take,
	takeEvery,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { IngredientActionPayload, IngredientsItem } from '../Burger.types';
import { burgerActions } from './actions.creator';

export function* onAddedIngredientInit(
	action: PayloadAction<IngredientActionPayload>
): SagaIterator<void> {
	// console.log('[burger.duck.ts] [onAddedIngredient]');
	// const response = yield call(saveItemRequest, action.payload);
	yield put(
		burgerActions.addItem.success({
			_id: action.payload._id,
			label: 'test',
			price: 10,
			type: 'salad',
		})
	);
}

export function* onAddedIngredientSuccess(
	action: PayloadAction<IngredientsItem>
): SagaIterator<void> {
	// console.log('[burger.duck.ts] [onAddedIngredientSuccess]');
	yield put(burgerActions.addItem.set(action.payload));
}

export function* onRemovedIngredientInit(
	action: PayloadAction<IngredientActionPayload>
): SagaIterator<void> {
	// console.log('[burger.duck.ts] [onRemovedIngredientInit]');
	yield put({
		type: burgerActions.removeItem.success.type,
		payload: action.payload,
	});
}

export function* onRemovedIngredientSuccess(
	action: PayloadAction<IngredientActionPayload>
): SagaIterator<void> {
	// console.log('[burger.duck.ts] [onRemovedIngredientSuccess]');
	yield put(burgerActions.removeItem.set(action.payload));
}

export function* onGetItemsInit(): SagaIterator<void> {
	// console.log('[burger.duck.ts] [onGetItemsInit]');
	yield put(
		burgerActions.getItems.success([
			{
				_id: 101,
				label: 'test',
				price: 10,
				type: 'salad',
			},
		])
	);
}

export function* onGetItemsSuccess(
	action: PayloadAction<IngredientsItem[]>
): SagaIterator<void> {
	// console.log('[burger.duck.ts] [onGetItemsSuccess]');
	yield put(burgerActions.getItems.set(action.payload));
}

const BURGUER_ACTION_HANDLERS = {
	// ADD AN INGREDIENT
	[burgerActions.addItem.init.type]: onAddedIngredientInit,
	// REMOVE AN INGREDIENT
	[burgerActions.removeItem.init.type]: onRemovedIngredientInit,
	// GET ALL INGREDIENTS
	[burgerActions.getItems.init.type]: onGetItemsInit,
};

export function* onAddedIngredientInitSaga(): SagaIterator<void> {
	// console.log('[burger.duck.ts] [onAddedIngredientInit]');
	const burgerChannel = yield actionChannel([
		burgerActions.addItem.init.type,
		burgerActions.removeItem.init.type,
		burgerActions.getItems.init.type,
	]);
	while (true) {
		const action = yield take(burgerChannel);
		yield call(BURGUER_ACTION_HANDLERS[action.type], action);
	}
}

export function* onIngredientsWatcher(): SagaIterator<void> {
	// console.log('[burguer.duck.ts] [onIngredientsWatcher]');
	yield fork(onAddedIngredientInitSaga);

	yield takeEvery(
		burgerActions.addItem.success.type,
		onAddedIngredientSuccess
	);
	yield takeEvery(
		burgerActions.removeItem.success.type,
		onRemovedIngredientSuccess
	);
	yield takeEvery(burgerActions.getItems.success.type, onGetItemsSuccess);
}
