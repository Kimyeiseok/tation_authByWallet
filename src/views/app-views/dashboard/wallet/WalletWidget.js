import React, {useEffect, useState} from 'react'
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag, Spin, message, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CopyOutlined, FolderOpenOutlined, StopTwoTone, EllipsisOutlined, LoadingOutlined, SlidersOutlined, LineChartOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { UniswapSVG, FacebookSVG} from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { useSelector, useDispatch  } from 'react-redux'
import  {getTacWethPair}  from 'redux/actions/Uniswap'
import {getTacBalance, getEtherBalance} from 'services/EtherScanService'
import IsUserRegistered from './IsUserRegistered'
import IsTACApproved from './IsTACApproved'
import Transfer from './Transfer'

const WalletWidgetOption = () => {
    
	
	return(
  <Menu>
	<Menu.Item key="0" onClick={ () => message.warning('Under Construction')}>
      <span>
        <div className="d-flex align-items-center">
          <FolderOpenOutlined />
          <span className="ml-3 ">Open Wallet</span>
        </div>
      </span>
    </Menu.Item>	
    <Menu.Item key="1" onClick={ () => {}  }>
      <span>
        <div className="d-flex align-items-center">
			<a href='https://info.uniswap.org/token/0xdeeb6091a5adc78fa0332bee5a38a8908b6b566e' target="_blank">
			  <SlidersOutlined />
	         <span className="ml-3 ">UniSwap </span>
			</a>	
        </div>
      </span>
    </Menu.Item>
	 <Menu.Item key="2" onClick={ () => {}  }>
      <span>
        <div className="d-flex align-items-center">
			<a href='https://app.zerion.io/invest/asset/TAC-0xdeeb6091a5adc78fa0332bee5a38a8908b6b566e' target="_blank">
			  <LineChartOutlined />
	         <span className="ml-3 ">Zerion </span>
			</a>	
        </div>
      </span>
    </Menu.Item>		
  </Menu>
)
} 

const CardDropdown = (menu) => (
  <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
    <a href="/#" className="text-gray font-size-lg" onClick={e => e.preventDefault()}>
      <EllipsisOutlined />
    </a>
  </Dropdown>
)

const WalletWidget = ({tacBalance, USDCTACpair, userInfo}) => {
	
	
	const tacBalanceInteger = Math.floor(tacBalance)
	const tacBalanceDecimal =  Math.floor( (tacBalance-Math.floor(tacBalance))*1000  ) 
	const tacBalanceToDollar = (USDCTACpair && (tacBalance * USDCTACpair).toFixed(2))
    const userName = userInfo && userInfo.name	

	return (
		<Card title={`${userName}'s Wallet`} description='헬로?'  extra={CardDropdown(WalletWidgetOption())}>
			<div className= 'd-flex mt-0'>
				<div>
						<div className="d-flex align-items-center">	
							<span className = 'mb-0' style={{fontSize: '40px', fontWeight: '600', letterSpacing: '-1px' , color: '#15151f'}}>{String.fromCharCode(parseInt('20AE',16))}</span>
							<span className = 'mb-0' style={{fontSize: '36px', fontWeight: '600', letterSpacing: '-1px' , color: '#15151f'}}>{tacBalanceInteger}</span>
							<span className = 'mb-0' style={{fontSize: '36px', fontWeight: '600', letterSpacing: '-1px' , color: '#d0d0d2'}}>.</span>
							<span className = 'mb-0' style={{fontSize: '36px', fontWeight: '600', letterSpacing: '-1px' , color: '#d0d0d2'}}>{tacBalanceDecimal}</span>				
							{tacBalanceToDollar?
							<span className = 'ml-3' style={{fontSize: '20px', fontWeight: '500', letterSpacing: '-0.4px', color: '#1cc760'}} >${tacBalanceToDollar}</span>
								: <LoadingOutlined className = 'ml-3' style={{ fontSize: 24, color:'#1cc760'}} spin />
							} 	
						</div>
				  
						{userInfo &&  
						<Typography.Link  className="text-gray-light mt-0" 
							type="secondary" href={`https://rinkeby.etherscan.io/address/${userInfo.walletAddress}`} target="_blank" copyable>
						 {userInfo.walletAddress}
						</Typography.Link>	 }		
			
				</div>
			</div>
			<div className="mt-3">
					<Transfer />
					<IsUserRegistered />
		           	<IsTACApproved />
			</div>
		</Card>
	)
}


export default WalletWidget