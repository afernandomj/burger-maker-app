import { createReducer, createSelector } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { burgerActions } from '../actions/actions.creator';
import { TBurgerState, TIngredientsData } from '../Burger.types';

const initialState: TIngredientsData = {
	ingredients: [],
};

const burgerReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(burgerActions.addItem.set, (state, action) => {
			state.ingredients = [...state.ingredients, action.payload];
		})
		.addCase(burgerActions.removeItem.set, (state, action) => {
			state.ingredients = state.ingredients.filter(
				(ingredient) => ingredient._id !== action.payload._id
			);
		})
		.addCase(burgerActions.getItems.set, (state, action) => {
			state.ingredients = action.payload;
		});
});

const rootReducer = combineReducers({
	burger: burgerReducer,
});

export const selectBurgerIngredients = createSelector(
	(state: TBurgerState) => state.burger,
	(burger) => burger.ingredients
);

export default rootReducer;
