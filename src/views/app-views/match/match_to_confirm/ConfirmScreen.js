import React , {useEffect, useState} from "react";
import { Card, Table, Tag, Tooltip, message, Button, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { AUTH_TOKEN,} from 'redux/constants/Auth'; 
import { CoopDataContract } from 'services/AddAndABI'
import { getWalletBalance}  from 'redux/actions/Uniswap'
import {getProposedMatch, approveMatchToconfirm} from 'redux/actions/Match'
import AvatarStatus from 'components/shared-components/AvatarStatus';
import UserCard from 'components/shared-components/UserCard';
import {notEnoughTACNotification} from 'components/shared-components/notifications'
import md5 from 'md5'
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
	LoadingOutlined
} from '@ant-design/icons';
import { db } from 'auth/FirebaseAuth';
import FirebaseService from 'services/FirebaseService'

const ConfirmScreen = () => {
	//const userInfo = useSelector(state => state.auth.userInfo)
	const proposedMatchToConfirm = useSelector(state => state.match.proposedMatchToConfirm)
	const tacBalance = useSelector(state => state.uniswap.tacBalance)	
	const dispatch = useDispatch()
	const address =  localStorage.getItem(AUTH_TOKEN);
    const [loading, setLoading] = useState(true)
	
    const [isModalVisible, setIsModalVisible] = useState(false)
	const handleCancel = () => {setIsModalVisible(false);};

	useEffect(()=>{	
		dispatch(getWalletBalance(address))	
	},[])

	useEffect(()=>{
		dispatch(getProposedMatch(address))
	},[])
	
	 useEffect(()=>{
		 (proposedMatchToConfirm !=null) && setLoading(false)
	 },[proposedMatchToConfirm])
	
const columns = [
	  {
	title: 'Match ID',
	dataIndex: 'id',
	key: 'id',
  },
 	{
	title: 'Time',
	dataIndex: 'time',
	key: 'time',
	render: item => {
       const date = new Date(item*1000);
		return(
		<div className="d-flex flex-column  justify-content-center">
			<p className="mt-0 mb-0">	{date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()} </p>
			<p className="mt-0 mb-0">	{date.getHours()+":"+date.getMinutes()} </p>
		</div>
		)
	}		 	
 	 },	
  {
    title: 'Contract',
    dataIndex: '',
    key: 'x',
    render:  (_, data) => {
		
		 
        const isUserWinner = data.clientAddress.toLowerCase() == data.winner.toLowerCase() ? true : false
		const winnerTx = data.winnerTx
		const loserTx = data.loserTx
		const onClick = async () => {
				if(tacBalance < 10){
					notEnoughTACNotification(tacBalance)
				}else{
					setIsModalVisible(true)
					await CoopDataContract.approveProposedMatch(data.clientAddress, data.id, isUserWinner, setIsModalVisible)	
				}				
			}
		
		
        if(isUserWinner){
			if(winnerTx){
				return( <Button type="primary"  size='small' danger onClick={onClick} >Confirm Again</Button>)
			}else{
				return( <Button type="primary" size='small' onClick={onClick} >Confirm</Button>)
			}		
		}else {
			if(loserTx){
				return( <Button type="primary" size='small' danger onClick={onClick} >Confirm Again</Button>)
			}else{
				return( <Button type="primary" size='small' onClick={onClick} >Confirm</Button>)
			}		
		}

	}
  },
  {
	title: 'Winner',
	dataIndex: 'winner',
	key: 'winner',
    render: (item, data) => {

        // let src = `http://gravatar.com/avatar/${md5(item.toLowerCase())}?d=identicon`   //????????? ?????????????????? ?????? ???????????? ????????? ?????? ??????????????? ???????????????
		let address_short = item.substring(0,6) + '...' + item.substring(38,42)

		
		return(
		<div className="d-flex">
			<AvatarStatus src={data.winnerInfo.profileImage} name={address_short} subTitle={data.winnerInfo.name}/>
		</div>
		)
		
		
	}		 
  },
  {
	title: 'Score',
	dataIndex: 'winnerPoints',
	key: 'winnerPoints',
  },
  {
	title: 'Status',
	dataIndex: 'winnerVerified',
	key: 'winnerVerified',
	render: (item, data) => {

	  if(item==true){
		 return(
			  <Tag icon={<CheckCircleOutlined />} color="lime">
				Approved
			  </Tag>
			  )
	  }else if(data.winnerTx){
		  return(
		    <Tag icon={<SyncOutlined spin />} color="geekblue">
				processing
			  </Tag>
		  )
	  }else{
		  return(
		<Tag icon={<ClockCircleOutlined />} color="#bfbfbf">
			Not Approved
		  </Tag>
		  )
	  }

	}
  },
	  {
	title: 'Loser',
	dataIndex: 'loser',
	key: 'loser',
    render: (item, data) => {

        // let src = `http://gravatar.com/avatar/${md5(item.toLowerCase())}?d=identicon`   //????????? ?????????????????? ?????? ???????????? ????????? ?????? ??????????????? ???????????????
		let address_short = item.substring(0,6) + '...' + item.substring(38,42)
		return(
		<div className="d-flex">
			<AvatarStatus src={data.loserInfo.profileImage} name={address_short} subTitle={data.loserInfo.name}/>
		</div>
		)
	}		  
  },
  {
	title: 'Score',
	dataIndex: 'loserPoints',
	key: 'loserPoints',
  },
  {
	title: 'Status',
	dataIndex: 'loserVerified',
	key: 'loserVerified',
	render: (item, data) => {
 		if(item==true){
		 return(
			  <Tag icon={<CheckCircleOutlined />} color="lime">
				Approved
			  </Tag>
			  )
	  }else if(data.loserTx){
		  return(
		      <Tag icon={<SyncOutlined spin />} color="geekblue">
				processing
			  </Tag>
		  )
	  }else{
		  return(
		  <Tag icon={<ClockCircleOutlined />} color="#bfbfbf">
			Not Approved
		  </Tag>
		  )
	  }
	}
  },	
  {
	title: 'Referee',
	dataIndex: 'referee',
	key: 'referee',
	  render: (item, data) => {
        // let src = `http://gravatar.com/avatar/${md5(item)}?d=identicon`   //????????? ?????????????????? ?????? ???????????? ????????? ?????? ??????????????? ???????????????
		let address_short = item.substring(0,6) + '...' + item.substring(38,42)
		return(
		<div className="d-flex">
			<AvatarStatus src={data.refereeInfo.profileImage} name={address_short} subTitle={data.refereeInfo.name}/>
		</div>
		)
	}		 
  },	

];	
	
	return (
		<>
			 <Table columns={columns} dataSource={proposedMatchToConfirm} scroll={{ x: 900, }} rowKey='id' loading={loading} />
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

export default ConfirmScreen




