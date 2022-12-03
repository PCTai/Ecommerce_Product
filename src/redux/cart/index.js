
import {ADD_PRODUCT, CHECKOUT, DELETE_PRODUCT, SET_PRODUCT} from './constants';

const uptoCartLocalStorage=(cart) =>{
    localStorage.setItem('cart', JSON.stringify(cart));
}
if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify([]));
}
const initState= JSON.parse(localStorage.getItem('cart'));
const cart = (state= initState, action)=>{
    // console.log(action)
    switch (action.type) {
        case ADD_PRODUCT:{
            const exits= state.find(item => item.id === action.payload.id);
            let newState =[];
            if(exits){
                newState = state.map((item) =>{
                    if(item.id===action.payload.id){
                        return {
                            ...item,
                            amount: item.amount+1
                        }
                    }
                    return item;
                })
            }else{
                newState=[...state,{
                    ...action.payload,
                    amount: 1
                } ]
            }
            uptoCartLocalStorage(newState);
            return newState;
        }
        case DELETE_PRODUCT:{

            const newState = state.filter(item => item.id !== action.payload.id);
            uptoCartLocalStorage(newState);

            return newState;
        }
        case SET_PRODUCT:{
            let newState =state.map((item) =>{
                if(item.id===action.payload.id){
                    if(action.payload.dir){
                        return {
                            ...item,
                            amount: item.amount-1
                        }
                    }
                    return {
                        ...item,
                        amount: item.amount+1
                    }
                }
                return item;
            })
            uptoCartLocalStorage(newState);

            return newState;
        }
        case CHECKOUT :{
            return [];
        }
        default:
            return state;
    }
}

const selectItemsCart =(state) => state.cart;
const totalCart =(state) => {
    let total= 0;
    state.cart.forEach(item => {
        total+= item.price * item.amount;
    });
    return total;
};
const selectAmountItem= state => state.cart.length || 0;
export {selectItemsCart, totalCart, selectAmountItem };
export default cart;