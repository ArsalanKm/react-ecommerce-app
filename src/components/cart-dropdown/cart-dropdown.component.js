import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">

                {
                    cartItems.length ?
                        cartItems.map(cartItem => {
                            return (<CartItem key={cartItem.id} item={cartItem}/>)
                        }) : <span className='empty-message'>your cart is empty</span>
                }
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    toggleCartHidden()
                }
                }>Go TO CHECKOUT</CustomButton>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}
export default withRouter(connect(mapStateToProps, {toggleCartHidden})(CartDropdown))