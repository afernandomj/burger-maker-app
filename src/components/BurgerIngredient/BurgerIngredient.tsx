import burgerIngredientStyles from './BurgerIngredient.module.css';

import breadTop from '../../assets/images/Ham-Bread--Top.svg';
import breadBottom from '../../assets/images/Ham-Bread--Bottom.svg';
import meat from '../../assets/images/Meat.svg';
import cheese from '../../assets/images/Cheese.svg';
import salad from '../../assets/images/Salad.svg';
import bacon from '../../assets/images/Bacon.svg';

type TBurgerIngredientProps = {
	type: string;
};

const BurgerIngredient = ({ type }: TBurgerIngredientProps) => {
	let ingredient = null;
	let classes = [burgerIngredientStyles.BurgerIngredient];
	if (type === 'bread-bottom') {
		ingredient = (
			<div
				className={[...classes, burgerIngredientStyles.BreadBottom].join(' ')}
				style={{
					backgroundImage: `url(${breadBottom})`,
				}}
			/>
		);
	} else if (type === 'bread-top') {
		ingredient = (
			<div
				className={[...classes, burgerIngredientStyles.BreadTop].join(' ')}
				style={{
					backgroundImage: `url(${breadTop})`,
				}}
			/>
		);
	} else if (type === 'meat') {
		ingredient = (
			<div
				className={[...classes, burgerIngredientStyles.Meat].join(' ')}
				style={{
					backgroundImage: `url(${meat})`,
				}}
			/>
		);
	} else if (type === 'cheese') {
		ingredient = (
			<div
				className={[...classes, burgerIngredientStyles.Cheese].join(' ')}
				style={{
					backgroundImage: `url(${cheese})`,
				}}
			/>
		);
	} else if (type === 'salad') {
		ingredient = (
			<div
				className={[...classes, burgerIngredientStyles.Salad].join(' ')}
				style={{
					backgroundImage: `url(${salad})`,
				}}
			/>
		);
	} else if (type === 'bacon') {
		ingredient = (
			<div
				className={[...classes, burgerIngredientStyles.Bacon].join(' ')}
				style={{
					backgroundImage: `url(${bacon})`,
				}}
			/>
		);
	}
	return ingredient;
};

export default BurgerIngredient;
