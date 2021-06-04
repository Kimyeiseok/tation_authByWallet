import  React, {useState, useEffect} from 'react';
import { 
  CloseCircleTwoTone,
	CloseCircleOutlined,
	CheckCircleTwoTone,
	CheckCircleOutlined,
	LoadingOutlined,
} from '@ant-design/icons';
import { Spin, Button, } from 'antd';
import Portis from '@portis/web3';
import Web3 from 'web3'
//import {coopData_contract} from 'services/AddAndABI'
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

const RegisteredNo = () => {
	
	return(
		<>
		 <Button className="mb-2 bt-2" type="primary" icon= {<CloseCircleOutlined />} size='small' danger block>
			User Registration
		 </Button>
		</>
	)
}


const IsUserRegistered = ({address}) => {
    console.log('IsUserRegistered', address)
	
	const [isRegistered, setIsRegistered] = useState(false)
	const checkIfRegistered = async (address) => {
	// await coopData_contract.methods
	// .getUser(address)
	// .call().then(res => setIsRegistered(res.userAddress));
		await CoopDataContract.getUser(address).then(res => setIsRegistered(res.userAddress))
	}

	useEffect(()=>{
	checkIfRegistered(address)
	},[address]
	)

  return (
    <>
	{!isRegistered && 
	     <Button className="mb-2 bt-2" type="primary"   size='small' loading block>
			  <span >User Confirmation</span>
		 </Button>}
	{isRegistered && (isRegistered=='0x0000000000000000000000000000000000000000') && <RegisteredNo/>}
	{isRegistered && (isRegistered !=='0x0000000000000000000000000000000000000000') && <RegisteredYes />}
		 
    </>
  )
}


export default IsUserRegistered
 