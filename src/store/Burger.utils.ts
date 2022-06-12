import { BURGER_API_BASE } from './Burger.constants';
import { IngredientsItem } from './Burger.types';

export const fetchItemsRequest = (endpoint: string): Promise<Response> =>
	fetch(`${BURGER_API_BASE}/${endpoint}.json`)
		.then((response) => response.json())
		.catch((error) => error);

export const saveSingleItemRequest = (
	endpoint: string,
	payload: IngredientsItem
): Promise<Response> =>
	fetch(`${BURGER_API_BASE}/${endpoint}.json`, {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.catch((error) => error);
