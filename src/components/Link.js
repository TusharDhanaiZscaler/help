import React from "react";

class Link extends React.Component {
    render() {
        if (this.props.image) {
            return (
                <div>
                    <a
                        href={this.props.href}
                        className={this.props.className}
                        >
                        <div className="link-image-container"><img src={this.props.image} /></div>
                        <div>{this.props.text}</div>
                    </a>
                </div>
            )
        }
        return (
            <a 
                href={this.props.href} 
                className={this.props.className}
            >{this.props.text}</a>
        )
    }
}

export default Link