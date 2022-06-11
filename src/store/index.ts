import { configureStore, Middleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './reducer/burger.duck';
import { onIngredientsWatcher } from './actions/burger.duck';

const sagaMiddleware = createSagaMiddleware();
const isDev = process.env.NODE_ENV === 'development';

const updatedMiddlewares: Middleware[] = [sagaMiddleware];
if (isDev) {
	const logger = createLogger({
		collapsed: true,
		duration: true,
	});
	updatedMiddlewares.push(logger);
}

export const store = configureStore({
	reducer,
	devTools: isDev,
	middleware: updatedMiddlewares,
});

sagaMiddleware.run(onIngredientsWatcher);

