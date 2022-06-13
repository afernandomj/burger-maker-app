import { MouseEventHandler, PropsWithChildren } from 'react';

import buttonStyles from './Button.module.css';

type ButtonProps = PropsWithChildren<{
	isDisabled: boolean;
	clickedHandler: MouseEventHandler<HTMLButtonElement>;
}>;

const Button = ({ children, isDisabled, clickedHandler }: ButtonProps) => {
	return (
		<button
			className={buttonStyles.Button}
			onClick={clickedHandler}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};

export default Button;
