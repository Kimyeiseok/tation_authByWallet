import React , {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { signInwithWallet,} from 'redux/actions/Auth';
// import { db, auth } from 'auth/FirebaseAuth';
import { Form, Input, Alert, Row, Col, Button, Card, Modal  } from "antd";
import {   GitlabOutlined, ThunderboltTwoTone, LoadingOutlined} from '@ant-design/icons';
import {portis} from 'services/PortisService'


const ConnectToPortis = () => {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {setIsModalVisible(false);};
  

  const showModal = () => {
	  setIsModalVisible(true)
	  portis.onLogin((walletAddress, email) => {
		  dispatch(signInwithWallet({walletAddress, walletType: 'Portis'}))   
		})
	  portis.showPortis()
	  };	
	
	useEffect(()=>{
		//portis.logout()
	},[])
	
	return (
		<>
		  <div className={`d-flex align-items-center justify-content-between mb-4`}>
			<Button icon={<ThunderboltTwoTone />} type="default" block  onClick={showModal}>
				<span>Portis</span>
			</Button>
		   </div>
	 		<Modal title="Wallet Connect" 
			   visible={isModalVisible} 
			   onCancel={handleCancel}  
				centered={true} maskClosable={false}
		       footer={[<Button key="Cancle" onClick={handleCancel}> Cancel </Button>]}
			>
              <p><LoadingOutlined /> Connect Portis to TACTION to proceed</p>
        	</Modal>
  		 </>
	)
}





export default ConnectToPortis