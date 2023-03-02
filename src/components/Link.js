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
                        <span className="link-image-container mx-2">
                            <img src={this.props.image} className="img-fluid link-image" />
                        </span>
                        <span className="">{this.props.text}</span>
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