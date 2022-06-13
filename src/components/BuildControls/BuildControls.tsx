import Button from '../UI/Button/Button';

import buildControlsStyles from './BuildControls.module.css';

const BuildControls = () => {
	return (
		<div className={buildControlsStyles.BuildControlsWrapper}>
			<p className='text-center'>
				You'll have to pay for that:{' '}
				<span className='text-emphasis'>$4,99 USD</span>
			</p>
			{/* TODO: Implement Controls component */}
			<div>
				<ul>
					<li>Onion</li>
					<li>Bacon</li>
					<li>Meat</li>
					<li>Cheese</li>
				</ul>
			</div>
			<Button isDisabled={false} clickedHandler={() => {}}>
				Place order!
			</Button>
		</div>
	);
};

export default BuildControls;
