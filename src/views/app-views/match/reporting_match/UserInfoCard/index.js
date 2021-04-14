import React from 'react';
import {  Avatar, Card, Row, Col, Form  } from "antd";
import IsTACApproved from "./IsTACApproved"
import IsUserRegistered from "./IsUserRegistered"


 const UserInfoCard = ({userInfo}) => {

	return (
		<>
		 <Card  hoverable> 
				<Row className="mb-3" gutter={4}>
       		     <Col span={4}>   
					{userInfo.profileImage &&   <Avatar size={45} src={userInfo.profileImage} /> }
				  </Col>
				 <Col span={20}> 
					 <div className=" ml-2" style={{textOverflow:'ellipsis', overflow:'hidden'}}>
					   {userInfo.name && <h4 className="mb-0">{userInfo.name}</h4> }	
					   {userInfo && <span className="text-muted" >{userInfo.walletAddress}</span>}			 
					 </div>		
			     </Col>
				</Row>
			   		<IsUserRegistered address={userInfo.walletAddress} />
		            <IsTACApproved address={userInfo.walletAddress}/>
		 </Card>	
		</>
	)
}


export default UserInfoCard