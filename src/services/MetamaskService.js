import detectEthereumProvider from '@metamask/detect-provider';
import {  notification  } from "antd";

export const metamaskInit = async () => {
	  const provider = await detectEthereumProvider();
	  let currentAccount = null;
	  const handleAccountsChanged = (accounts)=> {
			 if (accounts.length === 0) {
				// MetaMask is locked or the user has not connected any accounts
				 window.ethereum.enable()
				  .catch((err) => {
					err.code == (-32002)&&
					notification.warning({
								message: 'Notification',
								description: '메타마스크 지갑에 로그인 해주세요',
								placement: 'topRight',
							  }); 
				  });  
			  } else if (accounts[0] !== currentAccount) {
				currentAccount = accounts[0];
				// Do any other work!
				console.log(currentAccount)
				  return(currentAccount)
			  }
			}
	  const getAccount = () => {
		 
			ethereum
			  .request({ method: 'eth_accounts' })
			  .then(handleAccountsChanged)
			  .catch((err) => {
				notification.warning({
							message: 'Notification',
							description: err,
							placement: 'topRight',
						  }); 
			  });  
	      }
	  
      if (provider) {
 			const chainId = await provider.request({method: 'eth_chainId' })
			chainId == '0x1'
				? getAccount() 
				: notification.warning({
					message: 'Notification',
					description: '이더리움 네트워크를 메인넷으로 설정해주세요',
					placement: 'topRight',
				  });   
		} else {
		  // if the provider is not detected, detectEthereumProvider resolves to null
		  console.error('Please install MetaMask!', error)
				notification.warning({
				message: 'Notification',
				description: 'Please install MetaMask!',
				placement: 'topRight',
			  });
		}
		  }