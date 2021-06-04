import React , {useEffect, useState} from "react";
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { AUTH_TOKEN,} from 'redux/constants/Auth'; 
import { CoopDataContract } from 'services/AddAndABI'
import { getWalletBalance}  from 'redux/actions/Uniswap'
import {getProposedMatch, approveMatchToconfirm, test} from 'redux/actions/Match'
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {notEnoughTACNotification} from 'components/shared-components/notifications'
import md5 from 'md5'
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';


const ConfirmScreen = () => {
	//const userInfo = useSelector(state => state.auth.userInfo)
	const proposedMatchToConfirm = useSelector(state => state.match.proposedMatchToConfirm)
	const tacBalance = useSelector(state => state.uniswap.tacBalance)	
	const dispatch = useDispatch()
	const address =  localStorage.getItem(AUTH_TOKEN);
    const [loading, setLoading] = useState(true)
    const [buttonloading, setButtonloading] = useState(false)
    

	useEffect(()=>{	
		dispatch(getWalletBalance(address))	
	},[])

	useEffect(()=>{
		dispatch(getProposedMatch(address))
	},[])
	
		useEffect(()=>{
		dispatch(test(address))
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
    render: (_, data) => {
		// const [loading, setLoading] = useState(false)
		//console.log('data', data)
		//const [buttonloading, setButtonloading] = useState(false)
        const isUserWinner = data.clientAddress.toLowerCase() == data.winner.toLowerCase() ? true : false
		const winnerTx = data.winnerTx
		const loserTx = data.loserTx
		const onClick = async () => {
				if(tacBalance < 10){
					notEnoughTACNotification(tacBalance)
				}else{
					setButtonloading(true)
					await CoopDataContract.approveProposedMatch(data.clientAddress, data.id, isUserWinner, setButtonloading)	
				}				
			}
		
		
		
        if(isUserWinner){
			if(winnerTx){
				return( <Button type="primary"  size='small' danger onClick={onClick} >Confirm Again</Button>)
			}else{
				return( <Button type="primary" size='small' onClick={onClick}>Confirm</Button>)
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
    render: item => {

        let src = `http://gravatar.com/avatar/${md5(item.toLowerCase())}?d=identicon`   //나중에 파이어스토어 유저 정보에서 프로필 사진 불러오도록 변경해야함
		let address_short = item.substring(0,6) + '...' + item.substring(38,42)
		return(
		<div className="d-flex">
			<AvatarStatus src={src} name={address_short} subTitle={address_short}/>
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
    render: item => {

        let src = `http://gravatar.com/avatar/${md5(item.toLowerCase())}?d=identicon`   //나중에 파이어스토어 유저 정보에서 프로필 사진 불러오도록 변경해야함
		let address_short = item.substring(0,6) + '...' + item.substring(38,42)
		return(
		<div className="d-flex">
			<AvatarStatus src={src} name={address_short} subTitle={address_short}/>
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
	  render: item => {
        let src = `http://gravatar.com/avatar/${md5(item)}?d=identicon`   //나중에 파이어스토어 유저 정보에서 프로필 사진 불러오도록 변경해야함
		let address_short = item.substring(0,6) + '...' + item.substring(38,42)
		return(
		<div className="d-flex">
			<AvatarStatus src={src} name={address_short} subTitle={address_short}/>
		</div>
		)
	}		 
  },	

];	
	
	return (
		<>
			 <Table columns={columns} dataSource={proposedMatchToConfirm} scroll={{ x: 900, }} rowKey='id' loading={loading} />
		</>
	)
}

export default ConfirmScreen




