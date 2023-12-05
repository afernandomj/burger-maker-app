import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getItemsSet, setError, setLoading } from '../actions/Creator';
import { IngredientsItem } from '../../types/store';
import { fetchItemsRequest } from '../../utils/apiRequest';
import { BURGER_INGREDIENTS_ENDPOINT } from '../../constants';

export function* getItems(): SagaIterator<void> {
	// console.log('[sagas/index.ts] [getItemsInit]');
	try {
		yield put(setLoading(true));
		const response: IngredientsItem[] = yield call(
			fetchItemsRequest,
			BURGER_INGREDIENTS_ENDPOINT
		);
		yield put(setLoading(false));
		if (response.length > 0) {
			yield put(getItemsSet(response));
		} else {
			throw Error('No items found');
		}
	} catch (error) {
		yield put(setError((error as Error).message));
	}
}
