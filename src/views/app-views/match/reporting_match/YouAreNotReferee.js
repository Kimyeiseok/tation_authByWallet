import React , {useEffect, useState} from "react";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag, Form, Input, InputNumber, message, Select } from 'antd';


const YouAreNotReferee = () => {
	
	return(
		<>		
		<div className="mt-5">
		 <Row  justify="center" gutter={16}>
      		 <Col xs={24} sm={24} md={24} lg={16}>
				 <h1  style={{fontSize: "72px", fontWeight: "700", color: "#15151f", marginBottom: "24px",  textAlign: "center"}}>
					 You are not allowed as a referee</h1>
				 <p style={{fontSize: "20px", fontWeight: "500", color: "#737379", textAlign: "center"}}>
					 Please contact TKD-COOP to be TKD-COOP authorized official referee.
				     <br/>
					 Let's Bring Taekwondo online together
				 </p>	
				 <div className='d-flex  justify-content-center mt-5'>
				 	<a href="http://34.64.174.137/"  target="_blank" 
						style={{color: '#fff',
    							background: '#2962ef',
							    padding: '14px 110px',
							    borderRadius: '30px',
								fontSize: '18px',
							    fontWeight: '600'
							   }}>
					TKD-COOP</a>
				 </div>	
			 </Col>					 
          </Row>
		</div>	
	</>
	)
}


export default YouAreNotReferee