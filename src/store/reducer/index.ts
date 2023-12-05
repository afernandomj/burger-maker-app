import { combineReducers } from 'redux';
import { burgerReducer } from './state';

const rootReducer = combineReducers({
	burger: burgerReducer,
});

export default rootReducer;
