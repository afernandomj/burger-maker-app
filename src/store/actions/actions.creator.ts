import { createAction } from '@reduxjs/toolkit';
import { BURGER_ACTION_BASE } from '../Burger.constants';
import { IngredientActionPayload, IngredientsItem } from '../Burger.types';

export const burgerActions = {
	error: createAction<string>(`${BURGER_ACTION_BASE}/ingredient/error`),
	loading: createAction<boolean>(`${BURGER_ACTION_BASE}/ingredients/loading`),
	addItem: {
		init: createAction<IngredientActionPayload>(
			`${BURGER_ACTION_BASE}/add-ingredient/init`
		),
		success: createAction<IngredientsItem>(
			`${BURGER_ACTION_BASE}/add-ingredient/success`
		),
		set: createAction<IngredientsItem>(
			`${BURGER_ACTION_BASE}/add-ingredient/set`
		),
	},
	removeItem: {
		init: createAction<IngredientActionPayload>(
			`${BURGER_ACTION_BASE}/remove-ingredient/init`
		),
		success: createAction<IngredientActionPayload>(
			`${BURGER_ACTION_BASE}/remove-ingredient/success`
		),
		set: createAction<IngredientActionPayload>(
			`${BURGER_ACTION_BASE}/remove-ingredient/set`
		),
	},
	getItems: {
		init: createAction(`${BURGER_ACTION_BASE}/get-ingredients/init`),
		success: createAction<IngredientsItem[]>(
			`${BURGER_ACTION_BASE}/get-ingredients/success`
		),
		set: createAction<IngredientsItem[]>(
			`${BURGER_ACTION_BASE}/get-ingredients/set`
		),
	},
};

