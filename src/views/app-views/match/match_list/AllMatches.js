import React , {useEffect, useState} from "react";
import {test, approveMatchToconfirm} from 'redux/actions/Match'
import { useDispatch, useSelector } from 'react-redux';
import {CoopDataContract, }  from 'services/AddAndABI'
import { AUTH_TOKEN, GET_NUM_MATCHES} from 'redux/constants/Auth'; 
import {getAllApprovedMatches} from 'redux/actions/Match';

import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import md5 from 'md5'
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';


const AllMatches = () => {
	const address =  localStorage.getItem(AUTH_TOKEN);
	const dispatch = useDispatch()
	const approvedMatches = useSelector(state => state.match.approvedMatches)
	    const [loading, setLoading] = useState(true)
	
	const init = async ()=>{
		await CoopDataContract.numMatches().then(console.log)
		dispatch(getAllApprovedMatches())
	}
	
	useEffect(()=>{
	 init()
	},[])
	
	useEffect(()=>{
		 (approvedMatches !=null) && setLoading(false)
	 },[approvedMatches])
	
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
	title: 'Referee',
	dataIndex: 'referee',
	key: 'referee',
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
];	
	
	
	return (
		<div>
			 <Table columns={columns} dataSource={approvedMatches} scroll={{ x: 900, }} rowKey='id' loading={loading} />
		</div>
	)
}

export default AllMatches
