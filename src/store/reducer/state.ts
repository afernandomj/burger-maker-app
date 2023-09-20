import { createReducer } from '@reduxjs/toolkit';

import * as burgerActions from '../actions/Creator';
import { IngredientsDataType } from '../../types/store';

const initialState: IngredientsDataType = {
	ingredients: [],
	loading: false,
	error: null,
};

export const burgerReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(burgerActions.addItemSet, (state, action) => {
			const findIngredient = state.ingredients.find(
				(item) => item._id === action.payload._id
			);
			findIngredient && findIngredient.count++;
		})
		.addCase(burgerActions.removeItemSet, (state, action) => {
			const findIngredient = state.ingredients.find(
				(item) => item._id === action.payload._id
			);
			findIngredient && findIngredient.count--;
		})
		.addCase(burgerActions.getItemsSet, (state, action) => {
			state.ingredients = action.payload;
		})
		.addCase(burgerActions.setLoading, (state, action) => {
			state.loading = action.payload;
		})
		.addCase(burgerActions.setError, (state, action) => {
			state.error = action.payload;
		});
});
