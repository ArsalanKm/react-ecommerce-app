import React from "react";
import SHOP_DATA from "../../SHOP_DATA";
import CollectionPreview from "../../components/preview-collection/collection";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherProbs}) => {
                    return <CollectionPreview key={id} {...otherProbs}/>
                })}

            </div>
        )
    }
}

export default ShopPage