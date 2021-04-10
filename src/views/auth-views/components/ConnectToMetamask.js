import React , { useState} from "react";
import {  useDispatch } from 'react-redux'
import { AUTH_TOKEN,} from 'redux/constants/Auth';
import { signInwithWallet, authenticated} from 'redux/actions/Auth';
// import { db, auth } from 'auth/FirebaseAuth';
import {  Button, Modal, notification  } from "antd";
import {   GitlabOutlined, LoadingOutlined} from '@ant-design/icons';

import detectEthereumProvider from '@metamask/detect-provider'

const ConnectToMetamask = () => {

  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {setIsModalVisible(false);};
	 
  const showModal = () => {
	  setIsModalVisible(true);
	  getAccount();		  
	  };	

  const handleAccountsChanged = (accounts)=> {
	  
	 if (accounts.length === 0) {
		  notification.warning({ message: 'Notification', description: '메타마스크 지갑에 로그인 해주세요', placement: 'topRight', }); 
  	  } else {
		  const walletAddress = accounts[0]
		  dispatch(signInwithWallet({walletAddress, walletType:'MetaMask'}))
	  }
	}	
	
 const getAccount = async () =>{
	 const provider = await detectEthereumProvider();
	 if (provider) { 
		   await window.ethereum.request({ method: 'eth_requestAccounts' })
			  .then(handleAccountsChanged)
			  .catch((err) => {
				notification.warning({message: 'Notification',	description: err.message,	placement: 'topRight', }); 
			  });  
		
	 }else{
		 notification.warning({message: 'Notification', description: '메타마스크가 설치되어 있지 않습니다.', placement: 'topRight', }); 
	 } 
 }
	

	
	return (
		<>
		  <div className={`d-flex align-items-center justify-content-between mb-4`}>
			<Button icon={<GitlabOutlined />} type="default" block  onClick={showModal}>
				<span>MetaMask</span>
			</Button>
		   </div>
	 		<Modal title="Wallet Connect" 
			   visible={isModalVisible} 
			   onCancel={handleCancel}  
				centered={true} maskClosable={false}
		       footer={[<Button key="Cancle" onClick={handleCancel}> Cancel </Button>]}
			>
              <p><LoadingOutlined /> Connect MetaMask to TACTION to proceed</p>
        	</Modal>
  		 </>
	)
}





export default ConnectToMetamask