import Web3 from 'web3'
import Portis from '@portis/web3';

export const portis = new Portis('0fccffb3-5cff-4c61-8cca-59ee4e9e9894', 'rinkeby', {
  scope: ["email"]
});