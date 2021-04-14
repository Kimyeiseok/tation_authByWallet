import React , {useEffect, useState} from "react";
import { notification } from 'antd';

export const txHashNotification = (Txhash) => {
  notification.info({
    message: 'TxHash Published',
    duration: 0,
    description:
      `TxHash: ${Txhash}`,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
export const errorNotification = () => {
  notification.error({
    message: 'Transaction denied',
    duration: 0,
    description: 'Transaction has been failed or denied.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};