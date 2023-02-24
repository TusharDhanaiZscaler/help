import React from "react";

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class Dropdown extends React.Component {
    render() {
        if (this.props.icon) {
            return(
                <div className="dropdown-app">
                    <div className="dropdown-app-header">
                        <FontAwesomeIcon icon={this.props.icon} />
                        <p className="dropdown-app-title">{this.props.name} </p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="dropdown-app-body">{this.props.children}</div>
                </div>    
            )
        }
        return (
            <div className="dropdown-app">
                <div className="dropdown-app-header">
                    <p className="dropdown-app-title">{this.props.name} </p>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="dropdown-app-body">{this.props.children}</div>
            </div>
        )
    }
}

export default Dropdown