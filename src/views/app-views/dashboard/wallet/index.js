import React , {useEffect, useState} from "react";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag } from 'antd';
import { useSelector, useDispatch  } from 'react-redux'
import WalletWidget from './WalletWidget';
import UniswapService from 'services/UniswapService'
import AssetWidget from './AssetWidget'
import  {getTacWethPair, getWalletBalance}  from 'redux/actions/Uniswap'
import TactionAddress from './TactionAddress'


import { db, auth } from 'auth/FirebaseAuth';
import { 
  CopyOutlined,
  FolderOpenOutlined,  
  EllipsisOutlined, 
  StopTwoTone, 
} from '@ant-design/icons';


const Wallet = () => {
	const {userInfo} = useSelector(state => state.auth)
	const {USDCTACpair, USDCWETHPair, TACWETHPair, tacBalance, etherBalance} = useSelector(state => state.uniswap)	
	
    const dispatch = useDispatch()



	useEffect(()=>{
		if(userInfo){
		dispatch(getWalletBalance(userInfo.walletAddress))
		dispatch(getTacWethPair())
		}

	},[userInfo])

	
	
	
	return (

	 <>
		<Row justify="center" gutter={16}>
		    <Col xs={24} sm={24} md={24} lg={8}>
		        <WalletWidget userInfo={userInfo} USDCTACpair={USDCTACpair} tacBalance={tacBalance}/>
			</Col>	
		</Row>
		<Row justify="center" gutter={16}>
			<Col xs={24} sm={24} md={24} lg={8}>		
			</Col>	
		</Row>			
		<Row justify="center" gutter={16}>
			<Col xs={24} sm={24} md={24} lg={8}>	
				<AssetWidget USDCTACpair={USDCTACpair} USDCWETHPair={USDCWETHPair}  TACWETHPair={TACWETHPair}  tacBalance={tacBalance} etherBalance={etherBalance}/>
			</Col>	
		</Row>
		<Row justify="center" gutter={16}>
			<Col xs={24} sm={24} md={24} lg={8}>	
				<TactionAddress />
			</Col>	
		</Row>		



	  </>

	)
}

export default Wallet
