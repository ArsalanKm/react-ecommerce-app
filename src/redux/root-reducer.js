import {combineReducers} from "redux";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducers";

import {persistReducer} from "redux-persist";
import {directoryReducer} from "./directory/directory.reducer";
import storage from 'redux-persist/lib/storage'
import {ShopReducer} from "./shop/shop.reducer";

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory:directoryReducer,
    shop:ShopReducer
})

export default persistReducer(persistConfig,rootReducer)
