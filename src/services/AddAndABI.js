import {WALLET_TYPE} from 'redux/constants/Auth';
import Portis from '@portis/web3';
import Web3 from 'web3'
//import { TACVotingABI, TACVotingAddress,CoopDataABI, CoopDataAddress, TACLockupABI, TACLockupAddress, TACABI, TACAddress} from './AddAndABISrc';
//const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'mainnet');
import { TACVotingABI, TACVotingAddress,CoopDataABI, CoopDataAddress, TACLockupABI, TACLockupAddress, TACABI, TACAddress} from './AddAndABISrc_testnet'; 
import FirebaseService from 'services/FirebaseService'
const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'rinkeby');

const walletType = localStorage.getItem(WALLET_TYPE);

let web3
if(walletType == 'Portis'){
	 web3 = new Web3(portis.provider);
}else if(walletType == 'MetaMask'){
	 web3 = new Web3(window.ethereum);
}


export {TACAddress, CoopDataAddress, TACLockupAddress, TACVotingAddress}

export const tacVoting_contract = new web3.eth.Contract(TACVotingABI, TACVotingAddress);
export const coopData_contract = new web3.eth.Contract(CoopDataABI, CoopDataAddress);
export const tacLockup_contract = new web3.eth.Contract(TACLockupABI, TACLockupAddress);
export const tac_contract = new web3.eth.Contract(TACABI, TACAddress);
// export const getReceipt = new web3.eth.getTransactionReceipt(
//   "0xbb93d82a1766bc44574409a35be5a218f77df507c1dd82a9c9fd3cdf041e47ad", (txR) => {
//   console.log(txR);}
// )


export const CoopDataContract = {}

CoopDataContract.proposeMatch = async (winnerAddress, winnerPoints, loserAddress, loserPoints, refereeAddress) => {
	 console.log('hello proposeMatch')
	 await coopData_contract.methods.proposeMatch(winnerAddress,winnerPoints,loserAddress,loserPoints,refereeAddress,'values.notes' )
						  .send({ from: refereeAddress })
						  .on("transactionHash", function(txHash) {
							console.log(txHash)
							FirebaseService.refereeTxHash(refereeAddress, txHash)
						  })
						  .on('error', function(error){
							console.log(error)
						  })
	
}

CoopDataContract.getUserMatches = async (address) =>
			await coopData_contract.methods.getUserMatches(address).call().then(res => res)

CoopDataContract.getProposedMatchData = async (proposedMatchId) => 
         await coopData_contract.methods.getProposedMatch(proposedMatchId).call().then(res => res);

// CoopDataContract.approveProposedMatchData = async (address) =>
//            await coopData_contract.methods.setUser().send({ from: address, gas: '0x0CD4C'})
// 													.on("error", function(error){
// 													  console.log(error)
// 													})
// 													.on("transactionHash", function(txHash) {
// 													   console.log('Register User: transactionHash')
// 													   console.log(txHash)
// 	  												   return txHash
// 												  })

CoopDataContract.setUser = async (address, modalOff) =>
			await coopData_contract.methods
					  .setUser()
       				     .send({ from: address, gas: '0x1CD4C'})
					  .on("transactionHash", function(Txhash) {
						 console.log("pending");
						 console.log(Txhash)
						 FirebaseService.dbUpdateUserRegisterTxhash(address, Txhash)
						 modalOff()
					  })
					  .on("confirmation", function(receipt) {
						 console.log("confirmation");
						 console.log(receipt)
					  })
					  .on('error', function(error){
						console.log(error)
						modalOff()
					  })



CoopDataContract.getUser = async (address) =>
		await coopData_contract.methods
				.getUser(address)
					.call().then(res => res);
	

export const TacContract = {}

TacContract.approve = async (address, modalOff) =>
		await tac_contract.methods
			.approve(CoopDataAddress, "10000000000000000000000")
				.send({from: address, gas: '0x102A2' })
			.on("transactionHash", function(Txhash) {
			 console.log("pending");
			 console.log(Txhash)
			FirebaseService.dbUpdateTACApproveTxhash(address, Txhash)
			 modalOff()
			})
			.on("confirmation", function(receipt) {
			 console.log("confirmation");
			 console.log(receipt)
			})
			.on('error', function(error){
			console.log(error)
			modalOff()
			})

TacContract.allowance = async (address) => await tac_contract.methods.allowance(address, CoopDataAddress).call().then(res => res)


					  

