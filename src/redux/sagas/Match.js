import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	PROPOSE_MATCH,
	GET_PROPOSED_MATCH,
	APPROVE_PROPOSED_MATCH,
	PROPOSED_MATCH_TO_CONFIRM,
	TEST
} from '../constants/Match';
import {
	proposeMatch,
	getProposedMatch,
	proposedMatchToconfirm,
	approveMatchToconfirm,
	test
} from "../actions/Match";
import { 
	CoopDataContract
} from 'services/AddAndABI'
import FirebaseService from 'services/FirebaseService'
import {rsf} from 'auth/FirebaseAuth'





export function* proposeMatchSaga() {
  yield takeEvery(PROPOSE_MATCH, function* ({payload}) {
	    const {winnerAddress, winnerPoints, loserAddress, loserPoints, refereeAddress} = payload
			console.log('propose match!', winnerAddress)
		try {
		   const txHash = yield call(CoopDataContract.proposeMatch, winnerAddress,winnerPoints, loserAddress, loserPoints, refereeAddress)

		} catch (err) {
			console.log(err)
		}
	});
}

export function* testSaga() {
  yield takeEvery(TEST, function* ({payload}) {
	     console.log('hello test')
		try {
		  const snapshot = yield call(rsf.firestore.getDocument, 'proposedMatch/14');
  		  const user = snapshot.data();
		  console.log(user)

		} catch (err) {
			console.log(err)
		}
	});
}

export function* getProposedMatchSaga() {
  yield takeEvery(GET_PROPOSED_MATCH, function* ({address}) {
				console.log(address)
		try {
			 //proposedMatch Id를 불러옴
			 const MatchHistory = yield call(CoopDataContract.getUserMatches, address)	
			 const proposedMatchIds = MatchHistory._proposedMatches
			 const proposedMatchIds_parseInt = proposedMatchIds.map(item => parseInt(item))

			 //각 Id에 맞는 proposedMatch data를 불러옴
			 const proposedMatchDatas =yield all(proposedMatchIds.map(proposedMatchId => {
				  return call(CoopDataContract.getProposedMatchData, proposedMatchId)  
				}));
             //각 data별로 1) 내가 심판 본 경기나 2) 둘다 approve한건 제외함
			 const proposedMatchToConfirmDatas = proposedMatchDatas.filter(proposedMatchData => {
				 if((proposedMatchData.referee).toLowerCase() == address.toLowerCase()){
					 return false
				 }else if(proposedMatchData.winnerVerified && proposedMatchData.loserVerified){
					 return false
				 }else{
					 return proposedMatchData
				 }
			 })
		
			 //Firebase에서 proposedMatch에 대한  txhash 불러오기
			 // const ProposedMatchTxHashs =yield all(proposedMatchIds.map(proposedMatchId => {
			 // return call(FirebaseService.ProposedMatchTxHash, proposedMatchId)
			 // }));
			 // const returnDatas = proposedMatchToConfirmDatas.map((item, index)=>{
			 // return {...item, ...ProposedMatchTxHashs[index], clientAddress: address}
			 // })
			 
			 
			const proposedMatchTxHashsSnapshot = yield call(rsf.firestore.getCollection, 'proposedMatch');	    
			let ProposedMatchTxHashs1
			proposedMatchTxHashsSnapshot.forEach(item => {
				if(proposedMatchIds.includes(item.id)){
					ProposedMatchTxHashs1 = {
						...ProposedMatchTxHashs1,
						[item.id]: item.data()
					  }
				}
			})
			const returnDatas = proposedMatchToConfirmDatas.map((item, index)=>{
				 return {...item, ...ProposedMatchTxHashs1[item.id], clientAddress: address}
			 })
			console.log(returnDatas)
			 yield put(proposedMatchToconfirm(returnDatas));
			
		} catch (err) {
			
		}
	});
}

export function* approveProposedMatchSaga() {
  yield takeEvery(APPROVE_PROPOSED_MATCH, function* ({address, id, message}) {
		try {
			const test = yield call(CoopDataContract.approveProposedMatch, address, id, message)
			console.log(test)
		} catch (err) {
			
		}
	});
}



export default function* rootSaga() {
  yield all([
	  fork(proposeMatchSaga),
		fork(getProposedMatchSaga),
	  fork(approveProposedMatchSaga),
	  fork(testSaga)
  ]);
}
