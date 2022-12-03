import { ADD_PRODUCT, CHECKOUT, DELETE_PRODUCT, SET_PRODUCT } from "./constants"

const addProduct= (payload) =>{
    return {
        type: ADD_PRODUCT,
        payload
    }
}
const setProduct= (payload) =>{
    return {
        type: SET_PRODUCT,
        payload
    }
}
const deleteProduct= (payload) =>{
    return {
        type: DELETE_PRODUCT,
        payload
    }
}
const checkout= (payload) =>{
    return {
        type: CHECKOUT,
        payload
    }
}

export {addProduct,setProduct, deleteProduct, checkout }