import burgerStyles from './Burger.module.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import { IngredientsItem } from '../../store/Burger.types';
import { useAppSelector } from '../../hooks';
import {
	selectBurgerError,
	selectBurgerLoading,
} from '../../store/reducer/burger.duck';

type TBurgerProps = {
	ingredients: IngredientsItem[];
};

const Burger = ({ ingredients }: TBurgerProps) => {
	const isLoading = useAppSelector(selectBurgerLoading);
	const error = useAppSelector(selectBurgerError);
	let updatedIngredients = ingredients
		.map((ingredient) =>
			ingredient.count > 0 ? (
				<BurgerIngredient key={ingredient._id} type={ingredient.type} />
			) : null
		)
		.filter((ingredient) => ingredient !== null);
	const isIngredientsEmpty = updatedIngredients.length === 0;
	const loadingText = isLoading ? 'Loading...' : '';
	let errorMessage = null;
	if (!isLoading && isIngredientsEmpty) {
		errorMessage = (
			<>
				<p>{error}</p>
				<p>Get started to add some ingredients to build your burger!</p>
			</>
		);
	}

	return (
		<div className={burgerStyles.Burger}>
			<BurgerIngredient type='bread-top' />
			{loadingText}
			{errorMessage}
			{updatedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default Burger;
