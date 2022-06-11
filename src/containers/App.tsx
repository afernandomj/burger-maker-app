import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAppSelector } from '../hooks';
import { burgerActions } from '../store/actions/actions.creator';
import {
	IngredientActionPayload,
	IngredientsItem,
} from '../store/Burger.types';
import { selectBurgerIngredients } from '../store/reducer/burger.duck';

const App = (props: any) => {
	const burgerIngredients = useAppSelector(selectBurgerIngredients);

	useEffect(() => {
		props.getIngredients();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>Burger Marker App!</h1>
			<ul>
				{burgerIngredients &&
					burgerIngredients.map((ingredient: IngredientsItem) => (
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

export default connect(null, mapDispatchToProps)(App);