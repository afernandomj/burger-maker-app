import { PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks';
import { selectBurgerIngredients } from '../../store/reducer/burger.duck';
import BuildControls from '../BuildControls/BuildControls';
import Toolbar from '../Toolbar/Toolbar';

import layoutStyles from './Layout.module.css';

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
	const burgerIngredients = useAppSelector(selectBurgerIngredients);
	return (
		<div className={layoutStyles.Layout}>
			<Toolbar />
			<main className={layoutStyles.MainWrapper}>{children}</main>
			<BuildControls ingredients={burgerIngredients} />
		</div>
	);
};

export default Layout;
