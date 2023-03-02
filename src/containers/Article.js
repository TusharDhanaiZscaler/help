import React from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";
import CollapseList from "../components/CollapseList";
import ListGroupItemBody from "../components/ListGroupItemBody";

// images
import globe from '../images/globe-gray.svg';

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
                            <CollapseList title="Getting Started">
                                <ListGroup className="article-sub-list">
                                    <ListGroupItem className="pb-0 border-0">
                                        <ListGroupItemBody
                                            href="#" 
                                            title="About the ZIA Cloud Architecture"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 border-0">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Accessing and Using the Executive Insights App"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 border-0">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Step-by-Step Configuration Guide for ZIA"
                                        />
                                    </ListGroupItem>
                                    <CollapseList className="border-0 pb-0" title="Admin Portal">
                                        <ListGroup className="article-sub-list">
                                            <ListGroupItem className="pb-0 border-0">
                                                <ListGroupItemBody
                                                    href="#"
                                                    title="About the ZIA Admin Portal"
                                                />
                                            </ListGroupItem>
                                            <ListGroupItem className="pb-0 border-0">
                                                <ListGroupItemBody
                                                    href="#"
                                                    title="What is my cloud name for ZIA?"
                                                />
                                            </ListGroupItem>
                                            <ListGroupItem className="pb-0 border-0">
                                                <ListGroupItemBody
                                                    href="#"
                                                    title="Viewing Subscriptions"
                                                />
                                            </ListGroupItem>
                                            <ListGroupItem className="pb-0 border-0">
                                                <ListGroupItemBody
                                                    href="#"
                                                    title="About Zscaler Date Privacy"
                                                />
                                            </ListGroupItem>
                                        </ListGroup>
                                    </CollapseList>
                                </ListGroup>
                            </CollapseList>
                            <CollapseList title="Reference Architecture">
                                <ListGroup className="article-sub-list">
                                    <ListGroupItem className="pb-0 border-0">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Deploying Zscaler Internet Access in CHINA"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 border-0">
                                        <ListGroupItemBody
                                            href="#"
                                            title="TLS/SSL Inspection with Zscaler Internet Access"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 border-0">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Traffic Forwarding in Zscaler Internet Access"
                                        />
                                    </ListGroupItem>
                                </ListGroup>
                            </CollapseList>
                            <CollapseList title="Authentication & Administration">
                                <ListGroup>
                                    <CollapseList className="border-0 pb-0" title="Administrator & Role Management"></CollapseList>
                                    <CollapseList className="border-0 pb-0" title="User Management & Authentication Settings"></CollapseList>
                                    <CollapseList className="border-0 pb-0" title="Identity Proxy Settings"></CollapseList>
                                    <CollapseList className="border-0 pb-0" title="Alerts"></CollapseList>
                                    <CollapseList className="border-0 pb-0" title="End User Notifications"></CollapseList>
                                    <CollapseList className="border-0 pb-0" title="Backup & Restore"></CollapseList>
                                </ListGroup>
                            </CollapseList>
                            <CollapseList title="Traffic Forwarding"></CollapseList>
                            <CollapseList title="Policies"></CollapseList>
                            <CollapseList title="Workflow Automation"></CollapseList>
                            <CollapseList title="Security Alerts"></CollapseList>
                            <CollapseList title="Cloud Browser Isolation"></CollapseList>
                            <CollapseList title="Dashboard Analytics"></CollapseList>
                            <CollapseList title="Nanolog Streaming Service"></CollapseList>
                            <CollapseList title="Partner Integrations"></CollapseList>
                            <CollapseList title="Zscaler Management Portal for Partners"></CollapseList>
                            <CollapseList title="ZIA API"></CollapseList>
                            <CollapseList title="Troubleshooting"></CollapseList>
                            <CollapseList title="Release Notes"></CollapseList>
                        </ListGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article