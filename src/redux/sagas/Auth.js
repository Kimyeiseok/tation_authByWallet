import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	AUTH_TOKEN,
	WALLET_TYPE,
	SIGNIN,
	SIGNIN_WALLET,
	UPDATE_USER_INFO,
	SIGNOUT,
	SIGNUP,
	SIGNIN_WITH_GOOGLE,
	SIGNIN_WITH_FACEBOOK
} from '../constants/Auth';
import {
	showAuthMessage,
	authenticated,
	signOutSuccess,
	signUpSuccess,
	signInWithGoogleAuthenticated,
	signInWithFacebookAuthenticated
} from "../actions/Auth";

import {rsf} from 'auth/FirebaseAuth'
import FirebaseService from 'services/FirebaseService'

export function* signInWithFBEmail() {
  yield takeEvery(SIGNIN, function* ({payload}) {
		const {email, password} = payload;
		try {
			const user = yield call(FirebaseService.signInEmailRequest, email, password);
			if (user.message) {
				yield put(showAuthMessage(user.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, user.user.uid);
				yield put(authenticated(user.user.uid));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

// export function* signInWithWalletSaga() {
//   yield takeEvery(SIGNIN_WALLET, function* ({payload}) {
// 		const {walletAddress, walletType} = payload;

// 	    try{
// 			const userInfo = yield call(FirebaseService.dbGetAccount, walletAddress);
			
// 			if (userInfo){
// 				localStorage.setItem(AUTH_TOKEN, walletAddress);
// 				localStorage.setItem(WALLET_TYPE, walletType);
// 				yield put(authenticated(walletAddress));
// 			}else{
// 				yield call(FirebaseService.dbCreateAccount, walletAddress, walletType);
// 				localStorage.setItem(AUTH_TOKEN, walletAddress);
// 				localStorage.setItem(WALLET_TYPE, walletType);
// 				yield put(authenticated(walletAddress));
// 			}
			
// 		}catch(err){
// 			yield put(showAuthMessage(err));
// 		}    
// 	});
// }

export function* signInWithWalletSaga() {
  yield takeEvery(SIGNIN_WALLET, function* ({payload}) {
		const {walletAddress, walletType} = payload;

	    try{
			const userInfoSnapshot = yield call(rsf.firestore.getDocument, `users/${walletAddress}`);
  		    const userInfo = userInfoSnapshot.data();
				console.log('hihi', userInfo)
			if (userInfo){
				localStorage.setItem(AUTH_TOKEN, walletAddress);
				localStorage.setItem(WALLET_TYPE, walletType);
				yield put(authenticated(walletAddress, userInfo));
			}else{
				yield call(FirebaseService.dbCreateAccount, walletAddress, walletType);
				const userInfoSnapshot_new = yield call(rsf.firestore.getDocument, `users/${walletAddress}`);
  		        const userInfo_new = userInfoSnapshot.data();
					console.log('hihi', userInfo_new)
				localStorage.setItem(AUTH_TOKEN, walletAddress);
				localStorage.setItem(WALLET_TYPE, walletType);
				yield put(authenticated(walletAddress, userInfo_new));
			}
			
		}catch(err){
			yield put(showAuthMessage(err));
		}    
	});
}

export function* updateUserInfoSaga() {
  yield takeEvery(UPDATE_USER_INFO, function* ({payload}) {
		  const {walletAddress, name, country, division, team} = payload
	    try{
			console.log(payload)
			yield call(FirebaseService.dbUpdateUserInfo, walletAddress, name, country, division, team)
		}catch(err){
			yield put(showAuthMessage(err));
		}    
	});
}


export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
		try {
			localStorage.removeItem(AUTH_TOKEN);
			localStorage.removeItem(WALLET_TYPE);
			yield put(signOutSuccess());

		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

// export function* signUpWithFBEmail() {
//   yield takeEvery(SIGNUP, function* ({payload}) {
// 		const {email, password} = payload;
// 		try {
// 			const user = yield call(FirebaseService.signUpEmailRequest, email, password);
// 			if (user.message) {
// 				yield put(showAuthMessage(user.message));
// 			} else {
// 				localStorage.setItem(AUTH_TOKEN, user.user.uid);
// 				yield put(signUpSuccess(user.user.uid));
// 			}
// 		} catch (error) {
// 			yield put(showAuthMessage(error));
// 		}
// 	}
// 	);
// }

// export function* signInWithFBGoogle() {
//   yield takeEvery(SIGNIN_WITH_GOOGLE, function* () {
// 		try {
// 			const user = yield call(FirebaseService.signInGoogleRequest);
// 			if (user.message) {
// 				yield put(showAuthMessage(user.message));
// 			} else {
// 				localStorage.setItem(AUTH_TOKEN, user.user.uid);
// 				yield put(signInWithGoogleAuthenticated(user.user.uid));
// 			}
// 		} catch (error) {
// 			yield put(showAuthMessage(error));
// 		}
// 	});
// }

// export function* signInWithFacebook() {
//   yield takeEvery(SIGNIN_WITH_FACEBOOK, function* () {
// 		try {
// 			const user = yield call(FirebaseService.signInFacebookRequest);
// 			if (user.message) {
// 				yield put(showAuthMessage(user.message));
// 			} else {
// 				localStorage.setItem(AUTH_TOKEN, user.user.uid);
// 				yield put(signInWithFacebookAuthenticated(user.user.uid));
// 			}
// 		} catch (error) {
// 			yield put(showAuthMessage(error));
// 		}
// 	});
// }

export default function* rootSaga() {
  yield all([
		fork(signInWithFBEmail),
	    fork(signInWithWalletSaga),
		fork(signOut),
	    fork(updateUserInfoSaga),
	//	fork(signUpWithFBEmail),
	//	fork(signInWithFBGoogle),
	//	fork(signInWithFacebook)
  ]);
}
