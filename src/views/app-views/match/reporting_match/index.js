import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ReportingMatch = () => {
	const {userInfo} = useSelector(state => state.auth)
	return (
		<div>
			ReportingMatch component works!
			{userInfo&&userInfo.name}
		</div>
	)
}

export default ReportingMatch
