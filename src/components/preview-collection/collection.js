import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection.styles.scss"

const CollectionPreview = ({title, items}) => {

    return (
        <div className="collection-preview">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {

                    items.filter((item, index) => index < 4).map((item) => {
                        return (

                            <CollectionItem key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.title}/>

                        )
                    })
                }
            </div>
        </div>
    )

}
export default CollectionPreview