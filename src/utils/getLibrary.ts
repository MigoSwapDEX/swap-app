import { Web3Provider } from '@ethersproject/providers'
import getNodeUrl, { bitkeepLocalhost } from './getRpcUrl'

export default function getLibrary(provider: any): Web3Provider {
  // Change Bitkeep wallet RPC url
  if(
    provider
    &&
    provider.rpc
    && 
    (window as Window)?.bitkeep
    &&
    (window as Window)?.bitkeep?.ethereum?.isBitKeep
    &&
    (window as Window)?.bitkeep
    &&
    (window as Window).bitkeep?.ethereum?.isBitEthereum

    ){
      if(provider.rpc.rpcUrl === bitkeepLocalhost){
        provider.rpc.rpcUrl = getNodeUrl()
      }
  }
  const library = new Web3Provider(provider)

  library.pollingInterval = 15000
  return library
}
