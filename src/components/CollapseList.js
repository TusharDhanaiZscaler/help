import React from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";

// icons
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CollapseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggle = () => this.setState((prevState) => ({
        isOpen: !prevState.isOpen
    }));

    render() {
        return (
            <ListGroupItem className={this.props.className}>
                <div role="button" onClick={this.toggle}>
                    <FontAwesomeIcon icon={
                        this.state.isOpen ? faChevronDown : faChevronRight
                        } 
                        className="me-3" />
                    <span className="article-title">{this.props.title}</span>
                </div>
                <Collapse isOpen={this.state.isOpen} style={{transition: "none"}}>
                    {this.props.children}
                </Collapse>
            </ListGroupItem>
        )
    }

}

export default CollapseList