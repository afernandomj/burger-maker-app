import { MouseEventHandler } from 'react';

import buttonControlStyles from './ButtonControl.module.css';

type TButtonControl = {
	label: string;
	onRemoved: MouseEventHandler<HTMLButtonElement>;
	disabled: boolean;
	onAdded: MouseEventHandler<HTMLButtonElement>;
	count: number;
};

const ButtonControl = ({
	label,
	onRemoved,
	onAdded,
	disabled,
	count,
}: TButtonControl) => {
	return (
		<div className={buttonControlStyles.ButtonControl}>
			<div className={[buttonControlStyles.Label, 'text-right'].join(' ')}>
				{label}
			</div>
			<button
				className={[
					buttonControlStyles.Button,
					buttonControlStyles.ButtonPrimary,
				].join(' ')}
				onClick={onRemoved}
				disabled={disabled}
			>
				Remove
			</button>
			<button
				className={[
					buttonControlStyles.Button,
					buttonControlStyles.ButtonPrimary,
				].join(' ')}
				onClick={onAdded}
				disabled={count >= 0 ? false : true}
			>
				Add
			</button>
		</div>
	);
};

export default ButtonControl;
