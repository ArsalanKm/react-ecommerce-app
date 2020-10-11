import SHOP_DATA from "../../SHOP_DATA";

const INITIAL_STATE={
    collections:SHOP_DATA
}

export const ShopReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        default :
            return state
    }
}