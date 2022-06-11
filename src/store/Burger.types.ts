export interface IngredientActionPayload {
	_id: number;
}

export interface IngredientsItem {
	_id: number;
	label: string;
	price: number;
	type: string;
}

export type TIngredientsData = {
	ingredients: IngredientsItem[];
};
export type TIngredientsState = TIngredientsData;
export type TBurgerState = {
	burger: TIngredientsState;
};

