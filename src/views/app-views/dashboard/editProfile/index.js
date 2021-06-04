import React, {useEffect, useState, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import Flex from 'components/shared-components/Flex'
import {updateUserInfo} from "redux/actions/Auth";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag, Form, Input, InputNumber, message, Select, } from 'antd';
import countryList from 'react-select-country-list'
import CountrySelector from './CountrySelector'
import EditProfileImage from './EditProfileImage'
const { Option } = Select;

const EditProfile = () => {
	const {userInfo} = useSelector(state => state.auth)
	const walletAddress = userInfo && userInfo.walletAddress
	const [form] = Form.useForm();
	const options = useMemo(() => countryList().getData(), [])
	const [updateLoading, setUpdateLoading] = useState(false)
	const dispatch = useDispatch()
	
	const onFinish = () => {
		setUpdateLoading(true)
		form.validateFields().then(values => {
			console.log(values)
			dispatch(updateUserInfo({walletAddress, ...values}))
			setUpdateLoading(false)
			message.info('수정되었습니다.')
		}).catch(info => {
			message.error(info);
		});
	}

	
    useEffect(()=>{
		userInfo &&form.setFieldsValue({
				name: userInfo.name,
			    country: userInfo.country,
				division: userInfo.division,
				team : userInfo.team,
			});
	},[form, userInfo])
		
	return (
		<>		
		
		 <Form  onFinish={onFinish} layout="vertical" className="ant-advanced-search-form" form={form} >
			<PageHeaderAlt className="border-bottom mb-5" >
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="between" alignItems="center">
							<h2 className="mb-3">Edit Profile</h2>
							<div className="mb-3">
								<Button type="primary"  htmlType="submit" loading={updateLoading}>
									Update
								</Button>
							</div>
						</Flex>
					</div>
			</PageHeaderAlt>
			
		<div className="container">		
		 <Row  justify="center" gutter={16}>
			 <Col xs={24} sm={24} md={24} lg={12}>
				 <EditProfileImage />
			 </Col>
       		 <Col xs={24} sm={24} md={24} lg={12}>
				 <Card title="Basic Info">
					<Form.Item name="name" label="Name" colon={false}
						rules={[
						  {
							required: false,
							message: 'Please input your username!',
						  },
						]}
						>
						<Input  />
					</Form.Item>	
					 <Form.Item name="country" label="Country" colon={false}>  
						 <Select placeholder="Select a option" allowClear>
								   {options.map((item)=>{
									 return <Option key={item.value} value={item.value}>{item.label}</Option>
								  })}
						</Select>	  
					</Form.Item>		
					<Form.Item
							name="division"
							label="Division"
							rules={[
							  {
								required: false,
							  },
							]}
						  >
							<Select
							  placeholder="Select a option"
							  allowClear
							>
							  <Option value="Men +80kg">Men +80kg</Option>
							  <Option value="Men -80kg">Men -80kg</Option>
							  <Option value="Men -68kg">Men -68kg</Option>
							  <Option value="Men -58kg">Men -58kg</Option>
							  <Option value="Women +67kg">Women +67kg</Option>
							  <Option value="Women -67kg">Women -67kg</Option>
							  <Option value="Women -57kg">Women -57kg</Option>
							  <Option value="Women -49kg">Women -49kg</Option>								
							</Select>
					 </Form.Item>
					 <Form.Item name="team" label="Team" colon={false}>  
						<Select
							  placeholder="Select a option"
							  allowClear
							>
							  <Option value="태권도협동조합">태권도협동조합</Option>
							  <Option value="none">none</Option>								
							</Select>
					</Form.Item>
				 </Card>
			 </Col> 
          </Row>
		</div>			
		</Form>	
		</>
	)
}

export default EditProfile
