import Portis from '@portis/web3';
import Web3 from 'web3'
//import { TACVotingABI, TACVotingAddress,CoopDataABI, CoopDataAddress, TACLockupABI, TACLockupAddress, TACABI, TACAddress} from './AddAndABISrc';
//const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'mainnet');
import { TACVotingABI, TACVotingAddress,CoopDataABI, CoopDataAddress, TACLockupABI, TACLockupAddress, TACABI, TACAddress} from './AddAndABISrc_testnet'; 
import FirebaseService from 'services/FirebaseService'
const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'rinkeby');


export {TACAddress, CoopDataAddress, TACLockupAddress, TACVotingAddress}

// export const tacVoting_contract = new web3.eth.Contract(TACVotingABI, TACVotingAddress);
// export const coopData_contract = new web3.eth.Contract(CoopDataABI, CoopDataAddress);
// export const tacLockup_contract = new web3.eth.Contract(TACLockupABI, TACLockupAddress);
// export const tac_contract = new web3.eth.Contract(TACABI, TACAddress);


	

	

export const CoopDataContractService = (walletType, method, props) => {
	
	let web3
	switch (walletType){
		case 'Portis' : web3 = new Web3(portis.provider);
			break;
		case 'MetaMask': web3 = new Web3(window.ethereum);	
	}
	
	if(web3){
	
	const coopData_contract =  new web3.eth.Contract(CoopDataABI, CoopDataAddress);
	const trySwitch = async (method, props) => {
			switch(method){
			case 'proposeMatch' :  	

				break;
			case 'getUser' : 
					const {address} = props
					return  await coopData_contract.methods
						.getUser(address)
						.call().then(res => res);   

				break;		
			}	
    }
	
	return trySwitch(method, props)
		
	}
	

}

// const CoopDataContract = {}


// CoopDataContract.proposeMatch = async (winnerAddress, winnerPoints, loserAddress, loserPoints, refereeAddress) => {
// 	 console.log('hello proposeMatch')
// 	 await coopData_contract.methods.proposeMatch(winnerAddress,winnerPoints,loserAddress,loserPoints,refereeAddress,'values.notes' )
// 						  .send({ from: refereeAddress })
// 						  .on("transactionHash", function(txHash) {
// 							console.log(txHash)
// 							FirebaseService.refereeTxHash(refereeAddress, txHash)
// 						  })
// 						  .on('error', function(error){
// 							console.log(error)
// 						  })
	
// }

// CoopDataContract.getUserMatches = async (address) =>
// 			await coopData_contract.methods.getUserMatches(address).call().then(res => res)

// CoopDataContract.getProposedMatchData = async (proposedMatchId) => 
//          await coopData_contract.methods.getProposedMatch(proposedMatchId).call().then(res => res);

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

// CoopDataContract.setUser = async (address) =>
// 			await coopData_contract.methods
// 					  .setUser()
//        				     .send({ from: address, gas: '0x1CD4C'})
// 					  .on("transactionHash", function(hash) {
// 						 console.log("pending");
// 						 console.log(hash)
// 					  })
// 					  .on("confirmation", function(receipt) {
// 						 console.log("confirmation");
// 						 console.log(receipt)
// 					  });

// CoopDataContract.getUser = async (address) =>
// 		await coopData_contract.methods
// 				.getUser(address)
// 				.call().then(res => res);


//export const tac_contract_approve = async (address) =>	await tac_contract.methods.allowance(address, CoopDataAddress).call().then(res => res)
