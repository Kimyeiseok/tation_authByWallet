
import { auth, googleAuthProvider, facebookAuthProvider, db } from 'auth/FirebaseAuth';
import md5 from 'md5'

const FirebaseService = {}



FirebaseService.dbCreateAccount = async (walletAddress, walletType) => {
		 await db.collection("users").doc(walletAddress).set({
													 walletAddress: walletAddress,
			 										 walletType: walletType,
													 name: 'No Name',
													 country: '',
													 gender: '',
													 division:'',
													 rankingPoint: '1000',
													 role: 'User',
													 team: '',
													 profileImage: `http://gravatar.com/avatar/${md5(walletAddress)}?d=identicon`,
													 }).catch(function(error) {
													 console.error("Error adding document: ", error);
													 });
											};

FirebaseService.dbGetAccount = async (walletAddress) => 
   await db.collection("users").doc(walletAddress).get().then((doc) => {
        console.log("Current data: ", doc.data());
	return doc.data()
    });

FirebaseService.dbUpdateUserRegisterTxhash = async (address, userRegisterTxhash, message, modalOff) => {
		 await db.collection("users").doc(address).update({
		 userRegisterTxhash: userRegisterTxhash,
		 }).then(()=>{
			 message.info('Updated Successfully');
			 modalOff();
		 }).catch(function(error) {
		     message.error("Error adding document: ", error);
			 modalOff();
		 });
		};
FirebaseService.dbUpdateTACApproveTxhash = async (address, TACApproveTxhash, message, modalOff) => {
		 await db.collection("users").doc(address).update({
		 TACApproveTxhash: TACApproveTxhash,
		 }).then(()=>{
			 message.info('Updated Successfully')
			 modalOff();
		 }).catch(function(error) {
		     message.error("Error adding document: ", error);
			 modalOff();
		 });
		};

FirebaseService.dbUpdateUserInfo = async (walletAddress, name, country, division, team) => {
		 await db.collection("users").doc(walletAddress).update({
												    name: name,
			 										country:country,
			 										division: division,
			 										team : team
												 }).catch(function(error) {
												 console.error("Error adding document: ", error);
												 });
											};

FirebaseService.ProposedMatchTxHash = async (matchId) => 
   await db.collection("proposedMatch").doc(matchId).get().then((doc) => {
	return doc.data()
    });




FirebaseService.dbUpdateProposedMatchTxHash = async (address, matchId, isUserWinner, message, Txhash) => {
	if(isUserWinner){
		await db.collection("proposedMatch").doc(matchId).set({
			winnerTx: Txhash,
		}, { merge: true }).then(()=>{
			 message.success('Updated Successfully')
		 }).catch(function(error) {
		     message.error("Error adding document: ", error);
		 })		
	}else{
		await db.collection("proposedMatch").doc(matchId).set({
			loserTx: Txhash,
		}, { merge: true }).then(()=>{
			 message.success('Updated Successfully')
		 }).catch(function(error) {
		     message.error("Error adding document: ", error);
		 })		
	}
}


FirebaseService.refereeTxHash = async (refereeAddress, txHash, message, modalOff, onDiscard) => {
     await db.collection("referee").doc(refereeAddress)
		 .set({ txHash: txHash})
		 .then(()=>{
			 message.info('Updated Successfully');
		     modalOff();
		    onDiscard();
		 }).catch(function(error) {
		     message.error("Error adding document: ", error);
		 	modalOff()
		 });
};

	
export default FirebaseService