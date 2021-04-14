import React from 'react'
import { Card, Button } from 'antd';
import PropTypes from "prop-types";
import { ArrowUpOutlined, ArrowDownOutlined, CopyOutlined } from '@ant-design/icons';
import {TACAddress, CoopDataAddress, TACLockupAddress, TACVotingAddress} from 'services/AddAndABI'

const TactionAddress = ({ title, tacBalance, status, address, prefix, extra }) => {
	return (
		<Card title='Contract Address(Rinkeby)'>
         <Button className="mb-2 bt-2"   size='small'  block>
			<a href={`https://rinkeby.etherscan.io/address/${TACAddress}`} target="_blank"> TAC Contract </a>
		 </Button>
		 <Button className="mb-2 bt-2"    size='small'  block>
			<a href={`https://rinkeby.etherscan.io/address/${CoopDataAddress}`} target="_blank"> CoopData Contract </a>
		 </Button>
		<Button className="mb-2 bt-2"   size='small'  block>
			<a href={`https://rinkeby.etherscan.io/address/${TACLockupAddress}`} target="_blank"> TAC Lockup Contract </a>
		 </Button>
		 <Button className="mb-2 bt-2"   size='small' block>
			 <a href={`https://rinkeby.etherscan.io/address/${TACVotingAddress}`} target="_blank"> TAC Voting Contract </a>
		 </Button>
		</Card>
	)
}

TactionAddress.propTypes = {
  	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	tacBalance: PropTypes.number,
	address: PropTypes.string,
	status: PropTypes.string,
	prefix: PropTypes.element,
	extra: PropTypes.object
};

export default TactionAddress