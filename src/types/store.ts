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

export type IngredientsDataType = {
	ingredients: IngredientsItem[];
	loading: boolean;
	error: string | null;
};
export type IngredientsStateType = IngredientsDataType;
export type BurgerStateType = {
	burger: IngredientsStateType;
};
