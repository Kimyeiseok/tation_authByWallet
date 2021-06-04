import React , {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
//algolia-related
//import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, ClearRefinements  } from 'react-instantsearch-dom';
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag, Form, Input, InputNumber, message, Select, Modal } from 'antd';
import {LoadingOutlined,} from '@ant-design/icons';
	
import CustomSearchBox from "./CustomSearchBox"
import CustomHits from "./CustomHits"
import {searchClient, ALGOLIA_INDEX_NAME } from 'services/AlgoliaService'

import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import Flex from 'components/shared-components/Flex'
import UserInfoCard from "./UserInfoCard"
import {CoopDataContract} from 'services/AddAndABI'

const { Option } = Select;
const ReportingMatch = () => {
	const {userInfo} = useSelector(state => state.auth)
	const dispatch = useDispatch()
    // modal related states
	const [isModalVisible, setIsModalVisible] = useState(false);
	const modalOff = () => {setIsModalVisible(false);};	
	
	//player related states
	const [winnerInfo, setWinnerInfo] = useState('')
	const [loserInfo, setLoserInfo] = useState('')
	const updateWinnerInfo = (hit) => {
		  setWinnerInfo(hit)
	  }
    const updateLoserInfo = (hit) => {
		  setLoserInfo(hit)
	  }	
	const [form] = Form.useForm();
	
	const onDiscard = () => {
			 setWinnerInfo('');
			 setLoserInfo('');
			  form.setFieldsValue({
				 winnerPoints:'',
				 loserPoints: '',
				  matchResult: '',
				});
			}
	
	const onFinish = async (values) => {
		      setIsModalVisible(true)
			  const winnerAddress = values.winnerAddress
			  const winnerPoints = values.winnerPoints
			  const loserAddress = values.loserAddress
			  const loserPoints = values.loserPoints
			  const refereeAddress = userInfo.walletAddress
			  const matchResult = values.matchResult
			  console.log('refereeAddress',refereeAddress)
		      console.log('winnerAddress',winnerAddress)

			  if (!winnerAddress || !loserAddress){
				  message.warn('Please select both Winner and Loser')
			  }else if(winnerAddress == values.loserAddress){
				  message.warn('Winner and Loser should not be a same person') 
			  }else if(winnerAddress == refereeAddress){
				   message.warn('Winner and Referee should not be a same person') 
			  }else if(loserAddress == refereeAddress){
				   message.warn('Loser and Referee should not be a same person') 
			  }else{
				  console.log({winnerAddress, winnerPoints, loserAddress, loserPoints, refereeAddress, matchResult })
				  await CoopDataContract.proposeMatch(winnerAddress, winnerPoints, loserAddress, loserPoints, refereeAddress, matchResult, message, modalOff, onDiscard)
			  }
				  //dispatch(proposeMatch({winnerAddress, winnerPoints, loserAddress, loserPoints, refereeAddress }))
			}

	
	
	useEffect(() => {
	form.setFieldsValue({
	winnerAddress: winnerInfo.walletAddress,
	loserAddress: loserInfo.walletAddress,
	refereeAddress: userInfo.walletAddress
	});
	}, [winnerInfo, loserInfo]);
	
	return (
		<>		
		 <Form layout="vertical" onFinish={onFinish} form={form}>
			<PageHeaderAlt className="border-bottom" >
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
							<h2 className="mb-3">Reporting Match</h2>
							<div className="mb-3">
								<Button className="mr-2" htmlType="button" onClick={onDiscard}>Discard</Button>
								<Button type="primary"  htmlType="submit" >
									Report
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
			
		{/* player Information */}
		<div className="mt-3">
		 <Row  justify="center" gutter={16}>
      		 <Col xs={24} sm={24} md={24} lg={7}>
				 <Card title="Match Result">
					<Form.Item name="refereeAddress" label="Referee" colon={false}
						rules={[
							  {
								required: true,
								message: 'Please input the refereeAddress!',
							  },
							]}
						>
						<Input disabled />
					</Form.Item>	

					 <Form.Item name="matchResult" label = "Result of Match"
						rules={[
							  {
								required: true,
								message: 'Please select result of match!',
							  },
							]}						 
						 >  
						<Select
							  placeholder="Select Result of Match"
							  allowClear
							>
							  <Option value="Normal">Normal</Option>
							  <Option value="KO">KO</Option>
							  <Option value="RSC">RSC</Option>
							  <Option value="DQ">DQ</Option>								
							</Select>
					</Form.Item>
				 </Card>
			 </Col>			 
       		 <Col xs={24} sm={24} md={24} lg={7}>
				 <Card title="WIN">
					<Form.Item name="winnerPoints" label="Score" colon={false}
						rules={[
							  {
								required: true,
								message: 'Please input Score of winner!',
							  },
							]}
						>
						<InputNumber min={0} max={999} />
					</Form.Item>	
				
					 					<div className='mb-2'> 
					  <span className="text-danger">* </span>
					  <span className="text-dark font-weight-semibold"> Select Player</span>
					</div>
					 <Form.Item name="winnerAddress"  style={{display:'none'}} >  
						<Input  disabled={true} bordered={true} />
					</Form.Item>
			    	
					<InstantSearch indexName={ALGOLIA_INDEX_NAME} searchClient={searchClient}>				
						<CustomSearchBox/>
						<CustomHits updateInfo={updateWinnerInfo} clearsQuery/>
					 </InstantSearch>
					 	{winnerInfo && <UserInfoCard userInfo={winnerInfo}/>}
				 </Card>
			 </Col>
			 <Col xs={24} sm={24} md={24} lg={7}>
			  <Card title="LOSE">
				<Form.Item name="loserPoints" label="Score" colon={false}
					rules={[
							  {
								required: true,
								message: 'Please input Score of loser!',
							  },
							]}
					>  
				    <InputNumber min={0} max={999}   />
					</Form.Item>
				  	 
				    <Form.Item name="loserAddress" style={{display:'none'}}  >  
						<Input  disabled={true} bordered={true} />
					</Form.Item>
					<div className='mb-2'> 
					  <span className="text-danger">* </span>
					  <span className="text-dark font-weight-semibold"> Select Player</span>
					</div>
				  <InstantSearch 	indexName={ALGOLIA_INDEX_NAME}	searchClient={searchClient}  >
						<CustomSearchBox />
						<CustomHits updateInfo={updateLoserInfo}/>
				  </InstantSearch>
				  {loserInfo && <UserInfoCard userInfo={loserInfo}/>}
			 </Card>
			</Col>		
          </Row>
		</div>
	  </Form>	
		
		<Modal title="Reporting Match" 
		   visible={isModalVisible} 
		   onCancel={modalOff}  
		   maskClosable={false} centered={true}
		   footer={[<Button key="Cancle" onClick={modalOff}> Cancel </Button>]}
		   >
		  <LoadingOutlined /> 
		  <span className="ml-2"> Now Loading Wallet.</span>
		  <p>It might takes few seconds to show your wallet successfully</p>
		</Modal>
	</>
	)
}

export default ReportingMatch
