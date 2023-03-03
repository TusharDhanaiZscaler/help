import React from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";
import CollapseList from "../components/CollapseList";
import ListGroupItemBody from "../components/ListGroupItemBody";

// images
import globe from '../images/globe-gray.svg';
import articleList from '../articles';

const renderList = array => {
    return array.map( item => {
        if (!item.type) {
            return(
                <ListGroupItem className="pb-0 border-0" key={item.title}>
                    <ListGroupItemBody
                        href={item.link}
                        title={item.title}    
                        />
                </ListGroupItem>
            )
        }

        if (item.type === 'list') {
            return (
                <CollapseList
                    key={item.title}
                    title={item.title}
                >
                    <ListGroup>{renderList(item.children)}</ListGroup>
                </CollapseList>
            )
        }

        return (
            <CollapseList
                key={item.title}
                className="pb-0 border-0"
                title={item.title}
            ><ListGroup>
                {renderList(item.children)}
            </ListGroup>
            </CollapseList>
        )
    })
}

class Article extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                <div className="card px-2 py-5 px-md-5">
                    <div className="h3 fw-light d-flex">
                        <div>
                            <img src={globe} />
                        </div>
                        <div className="ps-2">Secure Internet and SaaS Access (ZIA) Help</div>
                    </div>
                    <div className="article-body">
                        <ListGroup flush className="border-bottom">
                            { renderList(articleList) }
                        </ListGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article