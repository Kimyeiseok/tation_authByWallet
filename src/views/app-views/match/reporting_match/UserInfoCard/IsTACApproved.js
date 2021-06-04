import  React, {useState, useEffect} from 'react';
import { 
  CloseCircleTwoTone,
	CloseCircleOutlined,
	CheckCircleTwoTone,
	CheckCircleOutlined,
	LoadingOutlined
} from '@ant-design/icons';
import { Spin, Button, } from 'antd';
import Portis from '@portis/web3';
import Web3 from 'web3'
//import {tac_contract, CoopDataAddress} from 'services/AddAndABI'
import {TacContract} from 'services/AddAndABI'


		const ApprovedYes = () => {

			return(
				 <Button className="mb-2 bt-2" type="primary"   icon= {<CheckCircleOutlined />} size='small'  block ghost >
					TAC Approved
				 </Button>
			)
		}

		const ApprovedNo = () => {		
			
			return(
				<>
				 <Button className="mb-2 bt-2" type="primary" icon= {<CloseCircleOutlined />} size='small'  danger block>
					TAC Approval
				 </Button>	
				</>
			)
		}



const IsTACApproved = ({address}) => {

	const [isApproved, setIsApproved] = useState(false)
		
	const checkIfApproved = async (address) => {
		// await tac_contract.methods
		//   .allowance(address, CoopDataAddress)
		// .call()
		//   .then(res => setIsApproved(res))
		await TacContract.allowance(address).then(res => setIsApproved(res))
	}

	useEffect(()=>{
	checkIfApproved(address)
	},[address]
	)

  return (
     <>
	  {!isApproved && 
	   	     <Button className="mb-2 bt-2" type="primary"   size='small' loading block>
			  <span> TAC Appoval</span>
		 </Button>
	  }
	{isApproved && (isApproved== 0) && <ApprovedNo />}
	{isApproved && (isApproved > 0) && <ApprovedYes />}
     </>
  )
}


export default IsTACApproved