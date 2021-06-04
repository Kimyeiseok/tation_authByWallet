import { all, takeEvery, put, fork, call, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga'
import {
	PROPOSE_MATCH,
	GET_PROPOSED_MATCH,
	APPROVE_PROPOSED_MATCH,
	PROPOSED_MATCH_TO_CONFIRM,
	TEST,
	GET_ALL_APPROVED_MATCHES,
	GET_MY_APPROVED_MATCHES,
} from '../constants/Match';
import {
	proposeMatch,
	getProposedMatch,
	proposedMatchToconfirm,
	approveMatchToconfirm,
	test,
	allApprovedMatches,
	myApprovedMatches,
} from "../actions/Match";
import { 
	CoopDataContract
} from 'services/AddAndABI'
import FirebaseService from 'services/FirebaseService'
import { auth, googleAuthProvider, facebookAuthProvider, db } from 'auth/FirebaseAuth';
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
  yield takeEvery(TEST, function* ({address}) {
			 const MatchHistory = yield call(CoopDataContract.getUserMatches, address)	
			 //console.log(MatchHistory)
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

			  const proposedMatchSnapshots = proposedMatchIds.map(proposedMatchId => {
				  return  db.collection('proposedMatch').doc(proposedMatchId)
			  })
			
	         const proposedMatchChannels = proposedMatchSnapshots.map(item =>{
				 return eventChannel(emit => item.onSnapshot(emit))
			 })
 			console.log('proposedMatchChannels',proposedMatchChannels)
	 		
			  const ProposedMatchTxHashs = yield all(proposedMatchChannels.map(item=>{
					  return take(item)	
			 }))
			 

		  const ref = db.collection('proposedMatch').doc("14")
		  const channel = eventChannel(emit => ref.onSnapshot(emit))
		 // console.log('channel', channel)
		try {
		 while (true) {
			 //  const data = yield take(channel)
			 // console.log(data.data())
			  const data1 =yield take(proposedMatchChannels[1])
			  console.log('asfsd',data1.data())
			}
		} catch (err) {
			console.log(err)
		}
	});
}



export function* getAllApprovedMatchesSaga() {
  yield takeEvery(GET_ALL_APPROVED_MATCHES, function* ({payload}) {
		try {
			const numMatches = yield call(CoopDataContract.numMatches) 
	
			const arrayByNumMatches=[...Array(parseInt(numMatches)).keys()].reverse()
			
			const approvedMatches = yield all(arrayByNumMatches.map((item) => {
				  return call(CoopDataContract.getMatch, item)  ;
				}));
			yield put(allApprovedMatches(approvedMatches))
			
		} catch (err) {
			console.log(err)
		}
	});
}

export function* getMyApprovedMatchesSaga() {
  yield takeEvery(GET_MY_APPROVED_MATCHES, function* ({address}) {
		try {
			const numMatches = yield call(CoopDataContract.numMatches) 
	
			const arrayByNumMatches=[...Array(parseInt(numMatches)).keys()].reverse()
			
			const approvedMatches = yield all(arrayByNumMatches.map((item) => {
				  return call(CoopDataContract.getMatch, item)  ;
				}));
			
			const approvedMatchesOfMine = approvedMatches.filter(item =>
			 item.loser.toLowerCase() == address.toLowerCase() || item.winner.toLowerCase() == address.toLowerCase()
			)
			console.log('test', approvedMatchesOfMine)
			yield put(myApprovedMatches(approvedMatchesOfMine))
			
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
			 //console.log(MatchHistory)
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
			 
			 //console.log(proposedMatchToConfirmDatas)
			
			//winner, loser, referee 정보 가져오기 from 파이어스토어
			const winnerInfos =yield all(proposedMatchToConfirmDatas.map(item => {
				 const winnerAddress = (item.winner).toLowerCase();
				 const winnerInfo =  call(FirebaseService.dbGetAccount, winnerAddress)
				 
				 return winnerInfo
			}))

			const loserInfos =yield all(proposedMatchToConfirmDatas.map(item => {
				 const loserAddress = (item.loser).toLowerCase();
				 const loserInfo =  call(FirebaseService.dbGetAccount, loserAddress)
				 return loserInfo
			}))
			
			const refereeInfos =yield all(proposedMatchToConfirmDatas.map(item => {
				 const refereeAddress = (item.referee).toLowerCase();
				 const refereeInfo =  call(FirebaseService.dbGetAccount, refereeAddress)
				 
				 return refereeInfo
			}))
			
			
			 //Firebase에서 proposedMatch에 대한  txhash 불러오기
			 const ProposedMatchTxHashs =yield all(proposedMatchIds.map(proposedMatchId => {
			 return call(FirebaseService.ProposedMatchTxHash, proposedMatchId)
			 }));
			 const returnDatas = proposedMatchToConfirmDatas.map((item, index)=>{
			 return {...item, 
					 ...ProposedMatchTxHashs[index], 
					 clientAddress: address, 
					 winnerInfo: winnerInfos[index],
					 loserInfo: loserInfos[index],
					 refereeInfo: refereeInfos[index],
					}
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
	  fork(testSaga),
	  fork(getAllApprovedMatchesSaga),
	  fork(getMyApprovedMatchesSaga)
  ]);
}
