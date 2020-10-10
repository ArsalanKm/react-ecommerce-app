import React from "react";
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCount,removeItem,addItem} from "../../redux/cart/cart.actions";

const CheckOutItem = ({cartItem, clearItemFromCount,removeItem,addItem}) => {
    const {name, quantity, price, imageUrl} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={()=>{removeItem(cartItem)}}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>{addItem(cartItem)}}>&#10095;</div>

            </span>
            <span className="price">{price}</span>
            <span className="remove-button"
                  onClick={() => clearItemFromCount(cartItem)}>&#9747;</span>
        </div>
    )
}


export default connect(null, {clearItemFromCount,removeItem,addItem})(CheckOutItem)