import React, {useRef} from 'react';
import {  Avatar, Card, Row, Col, Form, Table,   } from "antd";
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
				<AvatarStatus src={record.profileImage} name={record.name} subTitle={record.email} />
			</div>
		),
	  },
	 {
		title: 'Points',
		dataIndex: 'rankingPoint',
		key: 'rankingPoint',
	  },
	  {
		title: 'Address',
		dataIndex: 'walletAddress',
		key: 'walletAddress',
	  },
	 	  {
		title: 'Country',
		dataIndex: 'country',
		key: 'country',
	  },
	 	 	  {
		title: 'division',
		dataIndex: 'division',
		key: 'division',
	  },
	 	 	  {
		title: 'gender',
		dataIndex: 'gender',
		key: 'gender',
	  },
		  {
		title: 'Role',
		dataIndex: 'role',
		key: 'role',
	  },
	  {
		title: 'Team',
		dataIndex: 'team',
		key: 'team',
	  },
	 

	];


 const Hits = (props) => {
	const {hits,  refine, item } = props
 
	return (
		<>
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={columns} dataSource={hits} rowKey='walletAddress' />
			</Card>
		</>
	)
}

const CustomHits = connectHits(Hits)

export default CustomHits