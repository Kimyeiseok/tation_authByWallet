import {
	UPDATE_TAC_WETH_PAIR,
   UPDATE_WALLET_BALANCE,
} from '../constants/Uniswap';


const initState = {
  USDCTACpair: null,
	USDCWETHPair: null,
	TACWETHPair: null,
	tacBalance: null,
	etherBalance: null
}

const uniswap = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_TAC_WETH_PAIR:
			return {
				...state,
				USDCTACpair: action.payload.USDCTACpair,
				USDCWETHPair: action.payload.USDCWETHPair,
				TACWETHPair: action.payload.TACWETHPair,
			}
		case UPDATE_WALLET_BALANCE:
			return {
				...state,
				tacBalance: action.payload.tacBalance,
				etherBalance: action.payload.etherBalance,
				tacLockedBalance: action.payload.tacLockedBalance
			}	
		default:
			return state;
	}
}

export default uniswap