import React from "react";

class Logo extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} className={this.props.className} />
            </div>
        )
    }
}

export default Logo