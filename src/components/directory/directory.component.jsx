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
        return this.state.sections.map(({id,...otherProbs}) => {
            return (<MenuItem key={id} {...otherProbs}/>)
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