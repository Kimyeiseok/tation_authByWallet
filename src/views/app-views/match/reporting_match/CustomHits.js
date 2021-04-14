import React, {useRef} from 'react';
import {  Avatar, Card, Row, Col, Form  } from "antd";
import { connectHits } from 'react-instantsearch-dom';
import { ClearRefinements  } from 'react-instantsearch-dom';
import CustomClearRefinements from "./CustomClearRefinements"

 const Hits = (props) => {
	const {hits, updateInfo, refine, item } = props
    const clearButton = useRef()
 	
	const onClick = (hit) => {
		updateInfo(hit);
		clearButton.current.click()
	} 
	 
	 
	return (
		<>

		<CustomClearRefinements clearsQuery   clearButton={clearButton}/>
	    {hits.map(hit => (
			  <Card className="mb-1" key={hit.objectID} hoverable onClick={()=> onClick(hit)}> 
				<Row gutter={4}>
       		     <Col span={4}>   
					<Avatar size={45} src={hit.profileImage} />
				  </Col>
				 <Col span={20}> 
					 <div className=" ml-2" style={{textOverflow:'ellipsis', overflow:'hidden'}}>
						<h4 className="mb-0">{hit.name}</h4>	
						<span  className="text-muted" >{hit.walletAddress}</span>	
					 </div>		
			     </Col>
				</Row>
		 </Card>	
		))}
		</>
	)
}

const CustomHits = connectHits(Hits)

export default CustomHits