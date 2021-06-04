import React, {useRef, useState, useEffect} from 'react';
import {  Avatar, Card, Row, Col, Form, Table, Typography  } from "antd";
import { connectHits } from 'react-instantsearch-dom';
import { ClearRefinements  } from 'react-instantsearch-dom';
import AvatarStatus from 'components/shared-components/AvatarStatus';


 const columns = [
	  {
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (_, record) => (
			<div className="d-flex">
				<AvatarStatus src={record.profileImage} name={record.name}  />
			</div>
		),
	  },
	 {
		title: 'Points',
		dataIndex: 'rankingPoint',
		key: 'rankingPoint',
		 responsive: ['md'],
	  },
	  {
		title: 'Address',
		dataIndex: 'walletAddress',
		key: 'walletAddress',
		render: (item) => (
			<Typography.Text ellipsis style={{width: 200}} >
				<a href={`https://rinkeby.etherscan.io/address/${item}`} target="_blank">
				{item}
				</a>
			</Typography.Text> 
		)
	  },
	 	  {
		title: 'Country',
		dataIndex: 'country',
		key: 'country',
		responsive: ['md'],	  
	  },
	 	 	  {
		title: 'division',
		dataIndex: 'division',
		key: 'division',
				  responsive: ['md'],	  
	  },
		  {
		title: 'Role',
		dataIndex: 'role',
		key: 'role',
			  responsive: ['md'],	  
	  },
	  {
		title: 'Team',
		dataIndex: 'team',
		key: 'team',
		  responsive: ['md'],	  
	  },
	 

	];


 const Hits = (props) => {
	const {hits,  refine, item } = props
 	const [loading, setLoading] = useState(true)
	
	useEffect(()=>{
		 (hits.length != 0) && setLoading(false);
	 },[hits])
	
	return (
		<>
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={columns} dataSource={hits} loading={loading} rowKey='walletAddress' />
			</Card>
		</>
	)
}

const CustomHits = connectHits(Hits)

export default CustomHits