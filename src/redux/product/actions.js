import { GET_PRODUCTS } from "./constants"

const getProducts= (payload) =>{
    return {
        type: GET_PRODUCTS,
        payload
    }
}

export {getProducts, }