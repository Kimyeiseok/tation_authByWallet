import React from 'react';
import PropTypes from 'prop-types'
import { Avatar } from 'antd';

const renderAvatar = props => {
	return <Avatar {...props} className={`ant-avatar-${props.type}`}>{props.text}</Avatar>;
}

export const CryptoStatus = props => {
	const { name, suffix, amount, coin, price, id, type, src, icon, size, shape, gap, text, onNameClick } = props
	return (
		<div className="avatar-status d-flex align-items-center">
			{renderAvatar({icon, src, type, size, shape, gap, text })}
			<div className="ml-2">
				<div>
					{
						onNameClick ? 
						<div onClick={() => onNameClick({name, amount, src, id})} className="avatar-status-name clickable">{name}</div> 
						:
						<div className="avatar-status-name">{name}</div>
					}
					<span>{suffix}</span>
				</div>

				<span className="text-muted avatar-status-subtitle">{amount}{coin}</span>
				{price ? <span className="text-muted avatar-status-subtitle"> * ${price}</span>
					: null}
			</div>
		</div>
	)
}



export default CryptoStatus;
