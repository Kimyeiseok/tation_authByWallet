import  React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import { 
  CloseCircleTwoTone,
	CloseCircleOutlined,
	CheckCircleTwoTone,
	CheckCircleOutlined,
	LoadingOutlined
} from '@ant-design/icons';
import { Spin, Button, Modal, message } from 'antd';
import Portis from '@portis/web3';
import Web3 from 'web3'
//import {tac_contract, CoopDataAddress} from 'services/AddAndABI'
import {TacContract} from 'services/AddAndABI'



const ApprovedYes = ({address}) => {

	return(
		 <Button className="mb-2 bt-2" type="primary"   icon= {<CheckCircleOutlined />} size='small'  block ghost >
			TAC Approved
		 </Button>
	)
}

const ApprovedPending = ({address, TACApproveTxhash}) => {

	const [isModalVisible, setIsModalVisible] = useState(false);
	const modalOff = () => {setIsModalVisible(false);};	

	const approveTAC = async (address) => {
			setIsModalVisible(true)
		    await TacContract.approve(address, modalOff, message)
		}

	return(
		<>
		<Button className="mb-2 bt-2" icon= {<CheckCircleOutlined />} size='small' danger loading  block  >
			Pending on BlockChain
		 </Button>
			<Modal title="Approving TAC" 
				   visible={isModalVisible} 
				   onCancel={modalOff}  
				   maskClosable={false} centered={true}
				   footer={[<Button key="Cancle" onClick={modalOff}> Cancel </Button>]}
			>
			  <LoadingOutlined /> 
			  <span className="ml-2"> Confirm Again?</span>
			  <p>TxHash: {TACApproveTxhash} </p>
			  <p>Confirmation on BlockChain might takes some time to show your wallet successfully</p>
			  <p>Do you really want to confirm again? It will charge another gas fee.</p>
			</Modal>
		</>
	)
}


const ApprovedNo = ({address, TACApproveTxhash}) => {

	const [isModalVisible, setIsModalVisible] = useState(false);
	const modalOff = () => {setIsModalVisible(false);};	

	const approveTAC = async (address) => {
			setIsModalVisible(true)
		    await TacContract.approve(address, modalOff, message)
		}

	return(
		<>
		 <Button className="mb-2 bt-2" type="primary" icon= {<CloseCircleOutlined />} size='small' onClick={()=>{approveTAC(address)}} danger block>
			TAC Approval
		 </Button>
			<Modal title="Approving TAC" 
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



const IsTACApproved = () => {
	const userInfo = useSelector(state => state.auth.userInfo)
	const address = userInfo&& userInfo.walletAddress
	const walletType = userInfo&& userInfo.walletType
    const TACApproveTxhash = userInfo&& userInfo.TACApproveTxhash
	
	const [isApproved, setIsApproved] = useState(false)
		
	const checkIfApproved = async (address) => {
		await TacContract.allowance(address).then(res => setIsApproved(res))
	}
	


	useEffect(()=>{
	userInfo&& checkIfApproved(userInfo.walletAddress)
	},[userInfo]
	)

  return (
     <>
	  {!isApproved && 
	   	     <Button className="mb-2 bt-2" type="primary"   size='small' loading block>
			  <span> TAC Appoval</span>
		 </Button>
	  }
	{isApproved && (isApproved== 0) && !TACApproveTxhash && <ApprovedNo address={address}/>}
    {isApproved && (isApproved== 0) && TACApproveTxhash && <ApprovedPending address={address} TACApproveTxhash={TACApproveTxhash} />}
	{isApproved && (isApproved > 0) && <ApprovedYes />}
     </>
  )
}


export default IsTACApproved