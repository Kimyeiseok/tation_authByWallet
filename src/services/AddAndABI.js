import {WALLET_TYPE} from 'redux/constants/Auth';
import Portis from '@portis/web3';
import Web3 from 'web3'
//import { TACVotingABI, TACVotingAddress,CoopDataABI, CoopDataAddress, TACLockupABI, TACLockupAddress, TACABI, TACAddress} from './AddAndABISrc';
//const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'mainnet');
import { TACVotingABI, TACVotingAddress,CoopDataABI, CoopDataAddress, TACLockupABI, TACLockupAddress, TACABI, TACAddress} from './AddAndABISrc_testnet'; 
import FirebaseService from 'services/FirebaseService'
import { Button, notification, message } from 'antd';
import {txHashNotification, errorNotification} from 'components/shared-components/notifications'
const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'rinkeby');

const walletType = localStorage.getItem(WALLET_TYPE);

// let web3js
// if(walletType == 'Portis'){
// 	 web3js = new Web3(portis.provider);
// 	console.log('Hi Portis')
// }else if(walletType == 'MetaMask'){
// 	 web3js = new Web3(window.ethereum);
// 	console.log('Hi Metamask')
// }
const web3js = new Web3(portis.provider);
 console.log('web3 provider', web3js)

export {TACAddress, CoopDataAddress, TACLockupAddress, TACVotingAddress}

// export const tacVoting_contract = new web3js.eth.Contract(TACVotingABI, TACVotingAddress);
// export const coopData_contract = new web3js.eth.Contract(CoopDataABI, CoopDataAddress);
// export const tacLockup_contract = new web3js.eth.Contract(TACLockupABI, TACLockupAddress);
// export const tac_contract = new web3js.eth.Contract(TACABI, TACAddress);

 const tacVoting_contract =  new web3js.eth.Contract(TACVotingABI, TACVotingAddress);
 const coopData_contract =  new web3js.eth.Contract(CoopDataABI, CoopDataAddress);
 const tacLockup_contract =  new web3js.eth.Contract(TACLockupABI, TACLockupAddress);
 const tac_contract =  new web3js.eth.Contract(TACABI, TACAddress);
	





export const CoopDataContract = {}

CoopDataContract.proposeMatch = async (winnerAddress, winnerPoints, loserAddress, loserPoints, refereeAddress, matchResult, message, modalOff, onDiscard) => {
	 console.log('hello proposeMatch')
	 await coopData_contract.methods.proposeMatch(winnerAddress,winnerPoints,loserAddress,loserPoints,refereeAddress, matchResult )
						  .send({ from: refereeAddress })
						  .on("transactionHash", async (Txhash) => {
							 txHashNotification(Txhash)
							await FirebaseService.refereeTxHash(refereeAddress, Txhash, message, modalOff, onDiscard)
						  })
						  .on('error', function(error){
							errorNotification(error.message)
							console.log( error)
		        			 modalOff()
						  })
	
}

CoopDataContract.numMatches = async () =>
			await coopData_contract.methods.numMatches().call().then(res => res)

CoopDataContract.getMatch = async (matchId) =>
			await coopData_contract.methods.getMatch(matchId).call().then(res => res)

CoopDataContract.getUserMatches = async (address) =>
			await coopData_contract.methods.getUserMatches(address).call().then(res => res)

CoopDataContract.getProposedMatchData = async (proposedMatchId) => 
         await coopData_contract.methods.getProposedMatch(proposedMatchId).call().then(res => res);


//ApproveMatch
CoopDataContract.approveProposedMatch = async (address, id, isUserWinner, setIsModalVisible) =>
           await coopData_contract.methods.approveMatch(id).send({ from: address})
           .on("error", function(error){
			errorNotification(error.message)
			console.log( error)
			setIsModalVisible(false)
           })
           .on("transactionHash", async (Txhash)=> {
            txHashNotification(Txhash)
			await FirebaseService.dbUpdateProposedMatchTxHash(address, id, isUserWinner, Txhash)
	 		setIsModalVisible(false)
           })

CoopDataContract.setUser = async (address, modalOff, message) =>
			await coopData_contract.methods
					  .setUser()
       				     .send({ from: address, gas: '0x1CD4C'})
					  .on("transactionHash", async (Txhash) =>{
						 console.log("pending");
						 txHashNotification(Txhash)
						 await FirebaseService.dbUpdateUserRegisterTxhash(address, Txhash, message, modalOff)
						 modalOff()
					  })
					  .on("confirmation", function(receipt) {
						 console.log("confirmation");
						 console.log(receipt)
					  })
					  .on('error', function(error){
						errorNotification(error.message)
						console.log( error)
						modalOff()
					  })



CoopDataContract.getUser = async (address) =>
		await coopData_contract.methods
				.getUser(address)
					.call().then(res => res);
	

export const TacContract = {}

TacContract.approve = async (address, modalOff, message) =>
		await tac_contract.methods
			.approve(CoopDataAddress, "10000000000000000000000")
				.send({from: address, gas: '0x102A2' })
			.on("transactionHash", async (Txhash)=> {
			 console.log("pending");
			txHashNotification(Txhash)
			await FirebaseService.dbUpdateTACApproveTxhash(address, Txhash, message, modalOff)
			 modalOff()
			})
			.on("confirmation", function(receipt) {
			 console.log("confirmation");
			 console.log(receipt)
			})
			.on('error', function(error){
			errorNotification(error.message)
			console.log( error)
			modalOff()
			})

TacContract.allowance = async (address) => await tac_contract.methods.allowance(address, CoopDataAddress).call().then(res => res)


TacContract.transfer = async (address, recipient, amount, modalOff, setLoading) =>
		await tac_contract.methods
			.transfer(recipient,amount)
				.send({from: address, gas: '0x102A2' })
			.on("transactionHash", (Txhash)=> {
			 setLoading(false);
			 modalOff();
			 txHashNotification(Txhash)
			})
			.on("confirmation", function(receipt) {
			 console.log("confirmation");
			 console.log(receipt)
			})
			.on('error', function(error){
	  		setLoading(false);
			errorNotification(error.message)
			console.log( error)
			})					 

TacContract.getTACUnlocked = async (address) => 
	await tac_contract.methods
		.balanceOf(address)
			.call()
		.then(res => res)



export const TacLockupContract = {}

TacLockupContract.getTACLocked = async (address) => 
	await tacLockup_contract.methods
		.getTACLocked(address)
			.call()
		.then(res => res)