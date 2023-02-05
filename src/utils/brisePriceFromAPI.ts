import BigNumber from 'bignumber.js'

const brisePriceFromAPI = async() => {

    try {
        // http://localhost:5000/getbriseprice
        const apiUrl = process.env.REACT_APP_NODESERVER
        const response = await fetch(`${apiUrl}/getbriseprice`)
        const data = await response.json()
        return new BigNumber(data.price)
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
    
}

export default brisePriceFromAPI