import random from 'lodash/random'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NETWORK_URL, process.env.REACT_APP_NETWORK_URL_2]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export const bitkeepLocalhost = process.env.REACT_APP_BITKEEPLOCALHOST

export default getNodeUrl
