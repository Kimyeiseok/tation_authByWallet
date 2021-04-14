import React , {useEffect, useState} from "react";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag, Modal, Form, Input, InputNumber, message } from 'antd';
import { useSelector, useDispatch  } from 'react-redux'
import { AUTH_TOKEN,} from 'redux/constants/Auth'; 
import {TacContract} from 'services/AddAndABI'

import { 
  CopyOutlined,
  FolderOpenOutlined,  
  EllipsisOutlined, 
  StopTwoTone, 
} from '@ant-design/icons';


const Transfer = () => {
	//const {userInfo} = useSelector(state => state.auth)
    const address =  localStorage.getItem(AUTH_TOKEN);
    const dispatch = useDispatch()
	const [form] = Form.useForm();
	

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const modalOff = () => {setIsModalVisible(false);};	
    const onClick = () => {setIsModalVisible(true)}
	const onFinish = async (values) => {
		console.log(values)
		setLoading(true)
		const amounts = values.amounts + "000000000000000000"
		console.log(amounts)
		await TacContract.transfer(values.clientAddress, values.recipient, amounts, modalOff, setLoading)
	}
	

	useEffect(()=>{
	form.setFieldsValue({
		 clientAddress:address,
		});	
	},[address])
	
	return (

	 <>
	   <Button className="mb-2 bt-2" type="primary"   size='small'  block onClick={onClick}> Transfer</Button>	
		
		<Modal title="Transfer" 
		   visible={isModalVisible} 
		   onCancel={modalOff}  
		   maskClosable={false} centered={true}
		   footer={[<Button key="Cancle" onClick={modalOff}> Cancel </Button>,
				    <Button form="myForm"  key="submit" htmlType="submit" type="primary" loading={loading}> Submit </Button>
				   ]}
		   >
		 <Form id="myForm" layout="vertical" onFinish={onFinish} form={form}>	
				 <Form.Item name="clientAddress" label="Client Address"  colon={false}>
								<Input disabled={true}/>
				</Form.Item>				 
				 <Form.Item name="recipient" label="Recipient Address " colon={false}
								rules={[
									  {
										required: true,
										message: 'Please input the address of recipient!',
									  },
									]}
								>
								<Input />
				</Form.Item>	
				 <Form.Item name="amounts" label="Amount" colon={false}
								rules={[
									  {
										required: true,
										message: 'Please input the amounts of TAC!',
									  },
									]}
								>
								<Input type="number" suffix="TAC" />
				</Form.Item>				 
		    </Form>
		</Modal>
	 </>

	)
}

export default Transfer
