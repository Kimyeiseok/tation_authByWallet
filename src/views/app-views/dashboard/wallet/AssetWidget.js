import React, {useState, useEffect} from 'react'
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag,Spin } from 'antd';
import PropTypes from "prop-types";
import { ArrowUpOutlined, ArrowDownOutlined, CopyOutlined, FolderOpenOutlined, StopTwoTone, EllipsisOutlined,LockOutlined, UnlockOutlined,LoadingOutlined  } from '@ant-design/icons';
import { useSelector, useDispatch  } from 'react-redux'
import {getTacBalance, getEtherBalance} from 'services/EtherScanService'
import CryptoStatus from './CryptoStatus'
import  {getTacWethPair}  from 'redux/actions/Uniswap'



const AssetWidget = ({USDCTACpair, USDCWETHPair, TACWETHPair, tacBalance, etherBalance, tacLockedBalance}) => {

	

	const tacBalanceFixed = tacBalance && tacBalance.toFixed(3)
	const tacBalanceInteger = tacBalance && Math.floor(tacBalance)
	const tacBalanceDecimal = tacBalance &&  Math.floor( (tacBalance-Math.floor(tacBalance))*1000  ) 
	const tacBalanceToDollar = tacBalance && USDCTACpair &&  (tacBalance * USDCTACpair).toFixed(2)

	const tacLockedBalance_ether = tacLockedBalance && tacLockedBalance/Math.pow(10, 18)
	const tacLockedBalancetoDollar = tacLockedBalance && USDCTACpair &&  (tacLockedBalance_ether * USDCTACpair).toFixed(2)

	const etherBalanceFixed = etherBalance&& etherBalance.toFixed(3)
	const etherBalanceDollor = etherBalance&& USDCWETHPair&& (etherBalance* USDCWETHPair).toFixed(2)
	

    
	useEffect(()=>{
	  console.log(tacLockedBalance)
	},[tacLockedBalance])
	
	return (
		<Card title='My Assets'>

			<div className={`d-flex align-items-center justify-content-between mb-4`}>
				<CryptoStatus name={'Taekwondo Access Credit(Unlocked)'} text={<UnlockOutlined className='text-dark' />}  amount= {tacBalance} coin={'TAC'} price={ USDCTACpair}/>
				<div>
					<div className="avatar-status-name text-success" >　</div>		
					{(tacBalanceToDollar !=null )?
					<div className=" avatar-status-name">${tacBalanceToDollar}</div>
						: <LoadingOutlined className = 'avatar-status-name' spin />
						}
				</div>
			</div>
			<div className={`d-flex align-items-center justify-content-between mb-4`}>
				<CryptoStatus name={'Taekwondo Access Credit(Locked)'}  text={<LockOutlined className='text-dark' />} amount={tacLockedBalance_ether} coin={'TAC'} price={USDCTACpair}/>
				<div>
					<div className="avatar-status-name text-success" > 　</div>	
					{(tacLockedBalancetoDollar !=null )?
					<div className=" avatar-status-name">${tacLockedBalancetoDollar}</div>	
						: <LoadingOutlined className = 'avatar-status-name' spin />
						}					
				</div>
			</div>
			<div className={`d-flex align-items-center justify-content-between mb-4`}>
				<CryptoStatus name={'Ethereum'} src={'https://s3.amazonaws.com/token-icons/eth.png'} amount={etherBalanceFixed } coin={'ETH'} price={USDCWETHPair}/>
				<div>
					<div className="avatar-status-name text-success" > 　 </div>			
					{etherBalanceDollor !=null ?
					<div className=" avatar-status-name">${etherBalanceDollor}</div>
						: <LoadingOutlined className = 'avatar-status-name' spin />
						}
				</div>
			</div>			
		</Card>
	)
}


export default AssetWidget