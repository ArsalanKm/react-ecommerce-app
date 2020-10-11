import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import './directory.component.styles.scss'
import {selectDirectorySections} from "../../redux/directory/directory.selector";

class Directory extends React.Component {
    renderSections = () => {
        return this.props.sections.map(({id,...otherProbs}) => {
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

const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory)