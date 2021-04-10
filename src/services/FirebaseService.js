import { auth, googleAuthProvider, facebookAuthProvider, db } from 'auth/FirebaseAuth';
import md5 from 'md5'

const FirebaseService = {}



FirebaseService.dbCreateAccount = async (walletAddress, walletType) => {
		 await db.collection("users").doc(walletAddress).set({
													 walletAddress: walletAddress,
			 										 walletType: walletType,
													 name: 'No Name',
													 nationality: '',
													 gender: '',
													 division:'',
													 rankingPoint: '',
													 role: '',
													 Team: '',
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

FirebaseService.dbUpdateUserRegisterTxhash = async (address, userRegisterTxhash) => {
		 await db.collection("users").doc(address).update({
													 userRegisterTxhash: userRegisterTxhash,
													 }).catch(function(error) {
													 console.error("Error adding document: ", error);
													 });
											};
FirebaseService.dbUpdateTACApproveTxhash = async (address, TACApproveTxhash) => {
		 await db.collection("users").doc(address).update({
													 TACApproveTxhash: TACApproveTxhash,
													 }).catch(function(error) {
													 console.error("Error adding document: ", error);
													 });
											};

	
export default FirebaseService