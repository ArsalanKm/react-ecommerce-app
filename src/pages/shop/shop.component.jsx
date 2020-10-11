import React from "react";
import {connect} from 'react-redux'
import CollectionPreview from "../../components/preview-collection/collection";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selector";

class ShopPage extends React.Component {

    render() {
        const {collections} = this.props
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherProbs}) => {
                    return <CollectionPreview key={id} {...otherProbs}/>
                })}

            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector(
    {
        collections: selectShopCollections
    }
)

export default connect(mapStateToProps)(ShopPage)