import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../preview-collection/collection";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

import './collection-overview.components.scss'

const CollectionOverview=({collections})=>{
    return (
<div className="collection-overview">
    {collections.map(({id, ...otherProbs}) => {
        return <CollectionPreview key={id} {...otherProbs}/>
    })}
</div>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionsForPreview
    }
)

export default connect(mapStateToProps)(CollectionOverview)
