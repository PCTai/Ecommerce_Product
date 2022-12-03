
import {GET_PRODUCTS} from './constants'
const initState= {
    list:[],
    filter: 'all',
    filters:{
        all: (el) =>el,

    } 
}
const products = (state= initState, action)=>{
    // console.log(action.payload)
    // console.log(action.type)
    switch (action.type) {
        case GET_PRODUCTS:{
            // console.log(action)
            return {
                ...state,
                list: action.payload
            }
        }
        default:
            return state;
    }
}

const selectListProduct =(state) => state.list;
export {selectListProduct};
export default products;