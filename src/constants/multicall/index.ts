import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x824E9Df0Df58482C2b7fb1A27A2b82E19a9a79aE',
  [ChainId.BSCNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.BSCTESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
