import { ChainId, Token, WETH, Fetcher, Trade, Route, TokenAmount, TradeType } from '@uniswap/sdk'

const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6)
const TAC = new Token(ChainId.MAINNET, '0xDeeB6091A5ADc78fA0332BEE5A38a8908b6b566e', 18)

const UniswapService = {}

UniswapService.USDCWETHPair = async () => {
	const USDCWETHPair = await Fetcher.fetchPairData(USDC, WETH[USDC.chainId])
 	const routeUSDC = new Route([USDCWETHPair], WETH[USDC.chainId])
	return routeUSDC.midPrice.toSignificant(6)
}


UniswapService.TACWETHPair = async () => {
    const TACWETHPair= await Fetcher.fetchPairData(TAC, WETH[TAC.chainId])
	const routeTAC = new Route([TACWETHPair], WETH[TAC.chainId])
	 return routeTAC.midPrice.toSignificant(3)
}   






export default UniswapService

 
  
  
