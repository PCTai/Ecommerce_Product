import { combineReducers, createStore } from "redux";
import products from "./product";
import cart from './cart'


const reducers = combineReducers({
    products,
    cart,
}
)

const store = createStore(reducers);
export default store;