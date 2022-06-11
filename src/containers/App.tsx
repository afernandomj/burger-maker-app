import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { burgerActions } from '../store/actions/actions.creator';
import {
	IngredientActionPayload,
	IngredientsItem,
	TBurgerState,
} from '../store/Burger.types';

const App = (props: any) => {
	useEffect(() => {
		// console.log(props);
		props.getIngredients();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>Burger Marker App!</h1>
			<ul>
				{props.ingredients &&
					props.ingredients.map((ingredient: IngredientsItem) => (
						<li key={ingredient._id}>
							{ingredient.label} ({ingredient.price}) -{' '}
							{ingredient.type}{' '}
							<button
								onClick={() =>
									props.removeIngredient({
										_id: ingredient._id,
									})
								}
							>
								Remove
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addIngredient: (payload: IngredientActionPayload) =>
		dispatch(burgerActions.addItem.init(payload)),
	removeIngredient: (payload: IngredientActionPayload) =>
		dispatch(burgerActions.removeItem.init(payload)),
	getIngredients: () => dispatch(burgerActions.getItems.init()),
});

const mapStateToProps = (state: TBurgerState) => ({
	ingredients: state.burger.ingredients,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

