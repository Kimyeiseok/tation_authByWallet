import {
  GET_TAC_WETH_PAIR,
	UPDATE_TAC_WETH_PAIR,
    GET_WALLET_BALANCE,
	UPDATE_WALLET_BALANCE
} from '../constants/Uniswap';

export const getTacWethPair = (address) => {
  return {
    type: GET_TAC_WETH_PAIR,
    address
  }
};

export const updateTacWethPair = (payload) => {
  return {
    type: UPDATE_TAC_WETH_PAIR,
    payload
  }
};


export const getWalletBalance = (address) => {
  return {
    type: GET_WALLET_BALANCE,
    address
  }
}
export const updateWalletBalance = (payload) => {
  return {
    type: UPDATE_WALLET_BALANCE,
    payload
  }
}

