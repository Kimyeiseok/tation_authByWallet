import { all } from 'redux-saga/effects';
import Auth from './Auth';
import Uniswap from './Uniswap'

export default function* rootSaga(getState) {
  yield all([
    Auth(),
	 Uniswap(),
	  
  ]);
}
