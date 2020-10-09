import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => {
                        return (<CartItem key={cartItem.id} item={cartItem}/>)
                    })
                }
                <CustomButton>Go TO CHECKOUT</CustomButton>
            </div>

        </div>
    )
}
                
const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}
export default connect(mapStateToProps)(CartDropdown)