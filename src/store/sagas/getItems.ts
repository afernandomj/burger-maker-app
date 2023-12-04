import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getItemsSet, setError, setLoading } from '../actions/Creator';
import { IngredientsItem } from '../../types/store';
import { BURGER_INGREDIENTS_ENDPOINT } from '../../constants';
import clilogger from 'bmcli-logger';
import { http } from '../../utils/api';

export function* getItems(): SagaIterator<void> {
	// console.log('[sagas/index.ts] [getItemsInit]');
	clilogger.info('[sagas/index.ts] [getItemsInit]');
	try {
		yield put(setLoading(true));
		const response: IngredientsItem[] = yield call(() =>
			http.get(BURGER_INGREDIENTS_ENDPOINT)
		);
		yield put(setLoading(false));
		if (response.length > 0) {
			yield put(getItemsSet(response));
		} else {
			throw Error('No items found');
		}
	} catch (error) {
		clilogger.error(
			`[sagas/index.ts] [getItemsInit] [error] ${(error as Error).message}`
		);
		yield put(setError((error as Error).message));
	}
}
