import React , {useEffect, useState} from "react";
import {test, approveMatchToconfirm} from 'redux/actions/Match'
import { useDispatch, useSelector } from 'react-redux';

const MatchList = () => {
	
	const dispatch = useDispatch()
	
	useEffect(()=>{
		dispatch(test())
	})
	return (
		<div>
			MatchList component works!
		</div>
	)
}

export default MatchList
