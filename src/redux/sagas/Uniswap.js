import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	GET_TAC_WETH_PAIR,
	UPDATE_TAC_WETH_PAIR,
	GET_WALLET_BALANCE,
	UPDATE_WALLET_BALANCE
} from '../constants/Uniswap';
import {
	getTacWethPair,
	updateTacWethPair,
	getWalletBalance,
	updateWalletBalance
} from "../actions/Uniswap";

import UniswapService from 'services/UniswapService'
import {getTacBalance, getEtherBalance} from 'services/EtherScanService'

export function* getTacWethPairSaga() {
  yield takeEvery(GET_TAC_WETH_PAIR, function* ({address}) {
		try {
			const TACWETHPair= yield call(UniswapService.TACWETHPair)
			const USDCWETHPair= yield call(UniswapService.USDCWETHPair)
			const USDCTACpair = (USDCWETHPair/TACWETHPair).toFixed(2)

			yield put(updateTacWethPair({USDCTACpair, USDCWETHPair, TACWETHPair}));

		} catch (err) {
		}
	});
}

export function* getWalletBalanceSaga() {
  yield takeEvery(GET_WALLET_BALANCE, function* ({address}) {
		try {
			const tacBalance = yield call(getTacBalance, address)
			const etherBalance = yield call(getEtherBalance, address)
			yield put(updateWalletBalance({tacBalance, etherBalance}));

		} catch (err) {
		}
	});
}



export default function* rootSaga() {
  yield all([
		fork(getTacWethPairSaga),
	  fork(getWalletBalanceSaga),

  ]);
}
