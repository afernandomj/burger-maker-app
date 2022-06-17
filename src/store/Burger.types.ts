export interface IngredientActionPayload {
	_id: number;
}

export interface IngredientsItem {
	_id: number;
	label: string;
	price: number;
	type: string;
	count: number;
}

export type TIngredientsData = {
	ingredients: IngredientsItem[];
	loading: boolean;
	error: string | null;
};
export type TIngredientsState = TIngredientsData;
export type TBurgerState = {
	burger: TIngredientsState;
};

