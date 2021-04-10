import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Uniswap from './Uniswap';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
	uniswap: Uniswap
});

export default reducers;