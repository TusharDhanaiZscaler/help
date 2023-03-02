import React from "react";

import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

class ListGroupItemBody extends React.Component {
    render() {
        return(
            <div className="d-flex">
                <div>
                    <FontAwesomeIcon icon={faFileAlt} className="link me-2" />
                </div>
                <Link
                    href={this.props.href}
                    className="text-decoration-none link fw-light"
                    text={this.props.title}
                    />
            </div>
        )
    }
}

export default ListGroupItemBody