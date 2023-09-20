import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import BuildControls from '../components/BuildControls/BuildControls';
import Burger from '../components/Burger/Burger';
import { useAppSelector } from '../hooks';
import * as burgerActions from '../store/actions/Creator';
import { IngredientActionPayload } from '../types/store';
import { selectBurgerIngredients } from '../store/reducer/selectors';

type TBurgerBuilderProps = ReturnType<typeof mapDispatchToProps>;

const BurgerBuilder = ({
	getIngredients,
	addIngredient,
	removeIngredient,
}: TBurgerBuilderProps) => {
	useEffect(() => {
		getIngredients();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const burgerIngredients = useAppSelector(selectBurgerIngredients);

	return (
		<>
			<Burger ingredients={burgerIngredients} />
			<BuildControls
				ingredients={burgerIngredients}
				onAddedIngredient={(id: number) => addIngredient({ _id: id })}
				onRemovedIngredient={(id: number) => removeIngredient({ _id: id })}
			/>
		</>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addIngredient: (payload: IngredientActionPayload) =>
		dispatch(burgerActions.addItem(payload)),
	removeIngredient: (payload: IngredientActionPayload) =>
		dispatch(burgerActions.removeItem(payload)),
	getIngredients: () => dispatch(burgerActions.getItems()),
});

export default connect(null, mapDispatchToProps)(BurgerBuilder);
