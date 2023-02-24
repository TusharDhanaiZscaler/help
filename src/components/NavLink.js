import React from "react";

class NavLink extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export default NavLink;