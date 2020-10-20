import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from 'react-redux'

import './collection.styles.scss'

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return (
        <div className="collection-page">
            <div className="title">{title}</div>
            <div className="items">
                {
                    items.map(item => {
                        return <CollectionItem key={item.id} item={item}/>
                    })
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection:
            state.shop.collections[ownProps.match.params.collectionId]
    }
}
export default connect(mapStateToProps)(CollectionPage)