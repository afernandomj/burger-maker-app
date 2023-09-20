import { useAppSelector } from '../../hooks';
import { IngredientsItem } from '../../types/store';
import {
	selectBurgerError,
	selectTotalPrice,
} from '../../store/reducer/selectors';
import Button from '../UI/Button/Button';
import ButtonControl from '../UI/ButtonControl/ButtonControl';

import buildControlsStyles from './BuildControls.module.css';

type TBuildControls = {
	ingredients: IngredientsItem[];
	onAddedIngredient: (id: number) => void;
	onRemovedIngredient: (id: number) => void;
};

const BuildControls = ({
	ingredients,
	onAddedIngredient,
	onRemovedIngredient,
}: TBuildControls) => {
	const ingredientTotalPrice = useAppSelector(selectTotalPrice);
	const error = useAppSelector(selectBurgerError);
	return (
		<div className={buildControlsStyles.BuildControlsWrapper}>
			<p className='text-center'>
				You'll have to pay for that:{' '}
				<span className='text-emphasis'>
					${ingredientTotalPrice.toLocaleString()} USD
				</span>
			</p>
			<div className={buildControlsStyles.BuildControlsAction}>
				{error && <p>{error}</p>}
				{ingredients.map((ingredient) => (
					<ButtonControl
						key={ingredient._id}
						label={ingredient.label}
						onRemoved={() => onRemovedIngredient(ingredient._id)}
						onAdded={() => onAddedIngredient(ingredient._id)}
						count={ingredient.count}
						disabled={ingredient.count && ingredient.count > 0 ? false : true}
					/>
				))}
			</div>
			{!error && (
				<Button isDisabled={false} clickedHandler={() => {}}>
					Place order!
				</Button>
			)}
		</div>
	);
};

export default BuildControls;
