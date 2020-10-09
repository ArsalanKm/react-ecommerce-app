import React from "react";
import {connect} from 'react-redux'
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-button.components";
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl, price} = item

    return (
        <div className="collection-item">
            <img src={imageUrl} alt=""/>
            <div className="image"
                 style={{backgroundImage: `url('${imageUrl}')`}}>

            </div>
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>

            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>

        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem)