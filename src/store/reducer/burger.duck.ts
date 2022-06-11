import { combineReducers } from 'redux';
import { burgerActions } from '../actions/actions.creator';
import { TIngredientsData } from '../Burger.types';

const initialState: TIngredientsData = {
	ingredients: [],
};

const burgerReducer = (state = initialState, action: any): TIngredientsData => {
	// console.log(state, action);
	if (action.type === burgerActions.addItem.set.type) {
		return {
			...state,
			ingredients: [...state.ingredients, action.payload],
		};
	} else if (action.type === burgerActions.removeItem.set.type) {
		return {
			...state,
			ingredients: state.ingredients.filter(
				(item) => item._id !== action.payload._id
			),
		};
	} else if (action.type === burgerActions.getItems.set.type) {
		return {
			...state,
			ingredients: action.payload,
		};
	} else {
		return state;
	}
};

const rootReducer = combineReducers({
	burger: burgerReducer,
});

export default rootReducer;

