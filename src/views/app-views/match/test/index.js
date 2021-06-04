import React , {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_TOKEN,} from 'redux/constants/Auth'; 
import ConfirmScreen from './ConfirmScreen'
import { getWalletBalance}  from 'redux/actions/Uniswap'

const Test = () => {


	return (
		<>
		 <ConfirmScreen  />
		</>
	)
}

export default Test
