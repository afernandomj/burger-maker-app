import Logo from '../Logo/Logo';

import toolbarStyles from './Toolbar.module.css';

const Toolbar = () => {
	return (
		<div className={toolbarStyles.Toolbar}>
			<Logo />
			<div className={toolbarStyles.HeaderTitle}>
				<h4>Customize your delightful Burger!</h4>
			</div>
		</div>
	);
};

export default Toolbar;
