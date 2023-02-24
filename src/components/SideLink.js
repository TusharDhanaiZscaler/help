import React from "react";

class SideLink extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export default SideLink