import React from "react";
import sections from "../../sections"
import MenuItem from "../menu-item/menu-item.component";
import './directory.component.styles.scss'
class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: sections

        }
    }

    renderSections = () => {
        return this.state.sections.map(({title, imageUrl, id,size}) => {
            return (<MenuItem key={id} imageUrl={imageUrl} title={title} size={size}/>)
        })
    }

    render() {
        return (
            <div className="directory-menu">
                {this.renderSections()}
            </div>
        )
    }
}

export default Directory