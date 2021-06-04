import React , {useEffect, useState} from "react";
import { notification } from 'antd';

export const txHashNotification = (Txhash) => {
  notification.info({
    message: 'TxHash Published',
    duration: 0,
    description:
	  <div>
		  <p>TxHash : </p>
		  <a href={`https://rinkeby.etherscan.io/tx/${Txhash}`} target="_blank">
			  {Txhash}
			  </a>
	  </div>,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
export const errorNotification = (error) => {
  notification.error({
    message: 'Transaction denied',
    duration: 0,
    description: 
	  <>
	  {/*<p>Transaction has been failed or denied.</p> */}
	     <p>{error}</p>
	  </>,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

export const notEnoughTACNotification = (tacBalance) => {
  notification.error({
    message: 'Not Enough TAC',
    duration: 0,
    description: 
	  <div>
	  	<p>You should have more than 10TAC to confirm the match.</p>
		<span>Current Balance : </span>
		<span className="text-danger">{tacBalance} TAC</span>
	  </div>
	  ,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};