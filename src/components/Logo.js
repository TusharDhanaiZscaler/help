import React from "react";

class Logo extends React.Component {
    render() {
        return(
            <div className="text-center col-12 col-xl-3 pt-2">
                <img src={this.props.image} className={this.props.className} />
            </div>
        )
    }
}

export default Logo