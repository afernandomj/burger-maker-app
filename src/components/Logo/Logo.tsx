import logoStyles from './Logo.module.css';

import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = () => {
	return (
		<div className={logoStyles.LogoWrapper}>
			<div className={logoStyles.Logo}>
				<div
					className={logoStyles.LogoInner}
					style={{ backgroundImage: `url(${burgerLogo})` }}
				></div>
			</div>
		</div>
	);
};

export default Logo;
