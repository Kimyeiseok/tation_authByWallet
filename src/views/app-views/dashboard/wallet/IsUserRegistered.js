import  React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import { 
  CloseCircleTwoTone,
	CloseCircleOutlined,
	CheckCircleTwoTone,
	CheckCircleOutlined,
	LoadingOutlined,
} from '@ant-design/icons';
import { Spin, Button, Modal } from 'antd';
import Portis from '@portis/web3';
import Web3 from 'web3'
//  import {coopData_contract} from 'services/AddAndABI'
 import {CoopDataContract} from 'services/AddAndABI'



const RegisteredYes = () => {
	return(
		<>
		<Button className="mb-2 bt-2" type="primary"  icon= {<CheckCircleOutlined />} size='small'  block ghost >

			User Confirmed
		 </Button>
		</>
	)
}

const RegisteredPending = ({address, userRegisterTxhash}) => {
	  
	  	const [isModalVisible, setIsModalVisible] = useState(false);
		const modalOff = () => {setIsModalVisible(false);};	
	
		const registerUser = async (address) => {
				    setIsModalVisible(true)
				    await CoopDataContract.setUser(address, modalOff)
				}	
	return(
		<>
		<Button className="mb-2 bt-2" icon= {<CheckCircleOutlined />} size='small' danger loading  block  >
			Pending on BlockChain
		</Button>
		 <Modal title="Registering User" 
		   visible={isModalVisible} 
		   onCancel={modalOff}  
		   maskClosable={false} centered={true}
		   footer={[<Button key="Cancle" onClick={modalOff}> Cancel </Button>]}
		   >
		  <LoadingOutlined /> 
		  <span className="ml-2"> Confirm Again?</span>
		  <p>Confirmation on BlockChain might takes some time to show your wallet successfully</p>
		  <p>Do you really want to confirm again? It will charge another gas fee.</p>
		</Modal>
		</>
	)
}

const RegisteredNo = ({address}) => {
		    const [isModalVisible, setIsModalVisible] = useState(false);
			const modalOff = () => {setIsModalVisible(false);};	
	
			const registerUser = async (address) => {
				    setIsModalVisible(true)
				    await CoopDataContract.setUser(address, modalOff)
				}	
			
	return(
		<>
		 <Button className="mb-2 bt-2" type="primary" icon= {<CloseCircleOutlined />} size='small' onClick={()=>{registerUser(address)}} danger block>
			User Registration
		 </Button>
		  <Modal title="Registering User" 
		   visible={isModalVisible} 
		   onCancel={modalOff}  
		   maskClosable={false} centered={true}
		   footer={[<Button key="Cancle" onClick={modalOff}> Cancel </Button>]}
		   >
		  <LoadingOutlined /> 
		  <span className="ml-2"> Now Loading Wallet.</span>
		  <p>It might takes few seconds to show your wallet successfully</p>
		</Modal>
		</>
	)
}


const IsUserRegistered = () => {
	const userInfo = useSelector(state => state.auth.userInfo)
	const address =  userInfo&& userInfo.walletAddress
	const walletType = userInfo&& userInfo.walletType
	const userRegisterTxhash = userInfo&& userInfo.userRegisterTxhash
	
	const [isRegistered, setIsRegistered] = useState(false)
	const checkIfRegistered = async (address) => 
		await CoopDataContract.getUser(address).then(res => setIsRegistered(res.userAddress))
	

	useEffect(()=>{
	userInfo&&checkIfRegistered(userInfo.walletAddress)
	},[userInfo]
	)


  return (
    <>
	{!isRegistered &&
	     <Button className="mb-2 bt-2" type="primary"   size='small' loading block> User Confirmation</Button>}

	{isRegistered && (isRegistered=='0x0000000000000000000000000000000000000000') && !userRegisterTxhash&& 
	  <RegisteredNo address={address} />}
	{isRegistered && (isRegistered=='0x0000000000000000000000000000000000000000') && userRegisterTxhash&& 
		<RegisteredPending address={address} userRegisterTxhash={userRegisterTxhash}/>}
	{isRegistered && (isRegistered !=='0x0000000000000000000000000000000000000000') && <RegisteredYes />}
		 
    </>
  )
}


export default IsUserRegistered
 