import React , {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import ReportingMatchScreen from './ReportingMatchScreen'
import YouAreNotReferee from './YouAreNotReferee'
import { AUTH_TOKEN,} from 'redux/constants/Auth'; 
import { CoopDataContract } from 'services/AddAndABI'

const ReportingMatch = () => {
   	const address =  localStorage.getItem(AUTH_TOKEN);
	const [isReferee, setIsReferee] = useState(null)
	
	const checkIsUserReferee = async (address) => 
	await CoopDataContract.getUser(address).then(res => setIsReferee(res.allowedMatches))
	

	
	useEffect(()=>{
	checkIsUserReferee(address)
	},[]
	)
	
	return (
	<>		
		{(isReferee && isReferee ==0) && <YouAreNotReferee />}
		{(isReferee && isReferee !=0) && <ReportingMatchScreen /> }
	</>
	)
}

export default ReportingMatch
