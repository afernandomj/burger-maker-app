import { createAction } from '@reduxjs/toolkit';
import { IngredientActionPayload, IngredientsItem } from '../../types/store';
import * as types from './Types';

export const setLoading = createAction<boolean>(types.BURGER_LOADING);
export const setError = createAction<string>(types.BURGER_ERROR);

export const addItem = createAction<IngredientActionPayload>(
	types.BURGER_ADD_ITEM
);
export const addItemSet = createAction<IngredientActionPayload>(
	types.BURGER_ADD_ITEM_SET
);

export const removeItem = createAction<IngredientActionPayload>(
	types.BURGER_REMOVE_ITEM
);
export const removeItemSet = createAction<IngredientActionPayload>(
	types.BURGER_REMOVE_ITEM_SET
);

export const getItems = createAction(types.BURGER_GET_ITEMS);
export const getItemsSet = createAction<IngredientsItem[]>(
	types.BURGER_GET_ITEMS_SET
);
