import React , {useEffect, useState} from "react";
import {test, approveMatchToconfirm} from 'redux/actions/Match'
import { useDispatch, useSelector } from 'react-redux';
import {CoopDataContract, }  from 'services/AddAndABI'
import { AUTH_TOKEN, GET_NUM_MATCHES} from 'redux/constants/Auth'; 
import {getAllApprovedMatches} from 'redux/actions/Match';
import AllMatches from './AllMatches'
import MyMatches from './MyMatches'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import Flex from 'components/shared-components/Flex'
import { Card, Table, Tag, Tooltip, message, Button, Tabs } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';

const { TabPane } = Tabs;
const MatchList = () => {
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

	return (
	<>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
							<h2 className="mb-3">Match History </h2>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs defaultActiveKey="1" style={{marginTop: 30}}>
						<TabPane tab="All Matches" key="1">
							<AllMatches />
						</TabPane>
						<TabPane tab="My Matches" key="2">
							<MyMatches />
						</TabPane>						
					</Tabs>
				</div>
		</>
	)
}

export default MatchList
