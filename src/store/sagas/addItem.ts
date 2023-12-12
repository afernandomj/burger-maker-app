import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { IngredientActionPayload } from '../../types/store';
import { put } from 'redux-saga/effects';
import { addItemSet } from '../actions/Creator';
import clilogger from 'bmcli-logger';

export function* addedItem(
	action: PayloadAction<IngredientActionPayload>
): SagaIterator<void> {
	// console.log('[sagas/index.ts] [addedItem]');
	clilogger.info('[sagas/index.ts] [addedItem]');

	yield put(addItemSet({ _id: action.payload._id }));
}
