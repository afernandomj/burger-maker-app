import { useAppSelector } from '../../hooks';
import { IngredientsItem } from '../../store/Burger.types';
import { selectTotalPrice } from '../../store/reducer/burger.duck';
import Button from '../UI/Button/Button';
import ButtonControl from '../UI/ButtonControl/ButtonControl';

import buildControlsStyles from './BuildControls.module.css';

type TBuildControls = {
	ingredients: IngredientsItem[];
};

const BuildControls = ({ ingredients }: TBuildControls) => {
	const ingredientTotalPrice = useAppSelector(selectTotalPrice);
	return (
		<div className={buildControlsStyles.BuildControlsWrapper}>
			<p className='text-center'>
				You'll have to pay for that:{' '}
				<span className='text-emphasis'>
					${ingredientTotalPrice.toLocaleString()} USD
				</span>
			</p>
			{/* TODO: Implement Controls component */}
			{ingredients.map((ingredient) => (
				<ButtonControl
					key={ingredient._id}
					label={ingredient.label}
					removed={() => {}}
					added={() => {}}
					disabled={false}
				/>
			))}
			<Button isDisabled={false} clickedHandler={() => {}}>
				Place order!
			</Button>
		</div>
	);
};

export default BuildControls;
