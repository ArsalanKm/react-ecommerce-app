import React from "react";
import CustomButton from "../custom-button/custom-button.components";

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>Go TO CHECKOUT</CustomButton>
            </div>

        </div>
    )
}
export default CartDropdown