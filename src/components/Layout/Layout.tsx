import { PropsWithChildren } from 'react';
import BuildControls from '../BuildControls/BuildControls';
import Toolbar from '../Toolbar/Toolbar';

import layoutStyles from './Layout.module.css';

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={layoutStyles.Layout}>
			<Toolbar />
			<main className={layoutStyles.MainWrapper}>{children}</main>
			<BuildControls />
		</div>
	);
};

export default Layout;
