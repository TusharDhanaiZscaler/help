import React from "react";

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    handleMouseEnter = () => {
        this.setState({
            isVisible: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const dropdownVisibilityToggle = this.state.isVisible ? "dropdown-menu show" : "dropdown-menu";
        if (this.props.icon) {
            return(
                <div
                    className="dropdown"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <div 
                        className="dropdown-toggle w-100 pe-1 d-flex justify-content-between
                            align-items-center justify-content-xl-start blue-bottom-border"
                        data-bs-toggle="dropdown">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={this.props.icon} />
                            <p className="m-0 ms-1">{this.props.name} </p>
                        </div>
                    </div>
                    <div className={dropdownVisibilityToggle}>{this.props.children}</div>
                </div>    
            )
        }
        return (
            <div 
                className="dropdown"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div 
                    className="dropdown-toggle w-100 d-flex justify-content-between mx-xl-2
                        align-items-center justify-content-xl-start blue-bottom-border" 
                    data-bs-toggle="dropdown"
                    data-bs-auto-close='inside'
                    >
                    {this.props.name}
                </div>
                <div className={dropdownVisibilityToggle}>{this.props.children}</div>
            </div>
        )
    }
}

export default Dropdown