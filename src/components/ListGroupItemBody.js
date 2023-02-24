import React from "react";

import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

class ListGroupItemBody extends React.Component {
    render() {
        return(
            <>
                <span>
                    <FontAwesomeIcon icon={faFileAlt} className="list-icon" />
                </span>
                <Link
                    href={this.props.href}
                    className="article-link"
                    text={this.props.title}
                    />
            </>
        )
    }
}

export default ListGroupItemBody