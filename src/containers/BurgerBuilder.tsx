import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import BuildControls from '../components/BuildControls/BuildControls';
import Burger from '../components/Burger/Burger';
import { useAppSelector } from '../hooks';
import { burgerActions } from '../store/actions/actions.creator';
import { IngredientActionPayload } from '../store/Burger.types';
import { selectBurgerIngredients } from '../store/reducer/burger.duck';

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
		dispatch(burgerActions.addItem.init(payload)),
	removeIngredient: (payload: IngredientActionPayload) =>
		dispatch(burgerActions.removeItem.init(payload)),
	getIngredients: () => dispatch(burgerActions.getItems.init()),
});

export default connect(null, mapDispatchToProps)(BurgerBuilder);
