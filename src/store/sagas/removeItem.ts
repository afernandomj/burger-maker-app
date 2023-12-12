import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { IngredientActionPayload } from '../../types/store';
import { put } from 'redux-saga/effects';
import { removeItemSet } from '../actions/Creator';
import clilogger from 'bmcli-logger';

export function* removedItem(
	action: PayloadAction<IngredientActionPayload>
): SagaIterator<void> {
	// console.log('[sagas/index.ts] [removedItem]');
	clilogger.info('[sagas/index.ts] [removedItem]');
	yield put({
		type: removeItemSet.type,
		payload: action.payload,
	});
}
