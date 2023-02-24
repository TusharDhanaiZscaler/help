import React from "react";
import { Collapse, ListGroup, ListGroupItem } from "reactstrap";
import Link from "../components/Link";
import CollapseList from "../components/CollapseList";
import ListGroupItemBody from "../components/ListGroupItemBody";

// images
import globe from '../images/globe-gray.svg';

class Article extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                <div className="article-wrapper card">
                    <div className="article-header">
                        <span>
                            <img src={globe} />
                        </span>
                        <span className="article-heading">Secure Internet and SaaS Access (ZIA) Help</span>
                    </div>
                    <div className="article-body">
                        <ListGroup flush className="border-bottom">
                            <CollapseList title="Getting Started">
                                <ListGroup className="article-sub-list">
                                    <ListGroupItem className="pb-0 no-border">
                                        <ListGroupItemBody
                                            href="#" 
                                            title="About the ZIA Cloud Architecture"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 no-border">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Accessing and Using the Executive Insights App"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 no-border">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Step-by-Step Configuration Guide for ZIA"
                                        />
                                    </ListGroupItem>
                                    <CollapseList className="no-border pb-0" title="Admin Portal">
                                        <ListGroup className="article-sub-list">
                                            <ListGroupItem className="pb-0 no-border">
                                                <ListGroupItemBody
                                                    href="#"
                                                    title="About the ZIA Admin Portal"
                                                />
                                            </ListGroupItem>
                                            <ListGroupItem className="pb-0 no-border">
                                                <ListGroupItemBody
                                                    href="#"
                                                    title="What is my cloud name for ZIA?"
                                                />
                                            </ListGroupItem>
                                            <ListGroupItem className="pb-0 no-border">
                                                <ListGroupItemBody
                                                    href="#"
                                                    title="Viewing Subscriptions"
                                                />
                                            </ListGroupItem>
                                            <ListGroupItem className="pb-0 no-border">
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
                                    <ListGroupItem className="pb-0 no-border">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Deploying Zscaler Internet Access in CHINA"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 no-border">
                                        <ListGroupItemBody
                                            href="#"
                                            title="TLS/SSL Inspection with Zscaler Internet Access"
                                        />
                                    </ListGroupItem>
                                    <ListGroupItem className="pb-0 no-border">
                                        <ListGroupItemBody
                                            href="#"
                                            title="Traffic Forwarding in Zscaler Internet Access"
                                        />
                                    </ListGroupItem>
                                </ListGroup>
                            </CollapseList>
                            <CollapseList title="Authentication & Administration">
                                <ListGroup>
                                    <CollapseList className="no-border pb-0" title="Administrator & Role Management"></CollapseList>
                                    <CollapseList className="no-border pb-0" title="User Management & Authentication Settings"></CollapseList>
                                    <CollapseList className="no-border pb-0" title="Identity Proxy Settings"></CollapseList>
                                    <CollapseList className="no-border pb-0" title="Alerts"></CollapseList>
                                    <CollapseList className="no-border pb-0" title="End User Notifications"></CollapseList>
                                    <CollapseList className="no-border pb-0" title="Backup & Restore"></CollapseList>
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