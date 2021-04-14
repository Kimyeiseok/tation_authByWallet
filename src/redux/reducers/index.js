import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Uniswap from './Uniswap';
import Match from './Match'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
	uniswap: Uniswap,
	match: Match
});

export default reducers;