import { MouseEventHandler } from 'react';

type TButtonControl = {
	label: string;
	removed: MouseEventHandler<HTMLButtonElement>;
	disabled: boolean;
	added: MouseEventHandler<HTMLButtonElement>;
};

const ButtonControl = ({ label, removed, added, disabled }: TButtonControl) => {
	return (
		// TODO: Add styles for ButtonControl
		<div className='ButtonControl'>
			<div className='Label'>{label}</div>
			<button onClick={removed} disabled={disabled}>
				Menos
			</button>
			<button onClick={added} disabled={disabled}>
				Mas
			</button>
		</div>
	);
};

export default ButtonControl;
