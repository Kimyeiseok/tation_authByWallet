import axios from 'axios'

const API_KEY = 'G5GY355XRA4PQPBKWX43CR2T64EDV4T9UN'   //kim041990


//mainnet
// const TAC_ADDRESS = '0xdeeb6091a5adc78fa0332bee5a38a8908b6b566e'
// const WALLET_ADDRESS = '0x0c00d314465231bcca8c980091e75fabd98af84a'

// export const getEtherBalance = async (address) => 
//  await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`)
// .then(eth => (eth.data.result/1000000000000000000).toFiexed(4))


// export const getTacBalance = async (address) => 
// await axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${TAC_ADDRESS}&address=${address}&tag=latest&apikey=${API_KEY}`).then(tac => (tac.data.result/1000000000000000000))


//rinkeby
const TAC_ADDRESS = '0xebfcEd4b7b335D62E691EB00a79b485fC44b2eb3'

export const getEtherBalance = async (address) => 
 await axios.get(`https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`).then(eth => (eth.data.result/1000000000000000000))

//https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=0x0C00D314465231bcCA8c980091E75faBd98AF84A&tag=latest&apikey=YourApiKeyToken


export const getTacBalance = async (address) => 
await axios.get(`https://api-rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${TAC_ADDRESS}&address=${address}&tag=latest&apikey=${API_KEY}`).then(tac => (tac.data.result/1000000000000000000))




