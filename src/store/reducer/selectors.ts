import { createSelector } from '@reduxjs/toolkit';
import { BurgerStateType } from '../../types/store';

export const selectBurgerIngredients = createSelector(
	(state: BurgerStateType) => state.burger,
	(burger) => burger.ingredients
);

export const selectBurgerLoading = createSelector(
	(state: BurgerStateType) => state.burger,
	(burger) => burger.loading
);

export const selectBurgerError = createSelector(
	(state: BurgerStateType) => state.burger,
	(burger) => burger.error
);

export const selectTotalPrice = createSelector(
	(state: BurgerStateType) => state.burger.ingredients,
	(ingredients) =>
		ingredients.reduce(
			(sum, ingredient) => sum + ingredient.price * ingredient.count,
			0
		)
);
