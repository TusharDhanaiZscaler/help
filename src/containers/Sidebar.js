import React, { useState } from "react";

import Link from "../components/Link";

// images
import globe from '../images/globe.svg';
import docs2 from "../images/docs2.svg";
import docs3 from "../images/docs3.svg";
import docs4 from "../images/docs4.svg";
import docs5 from "../images/docs5.svg";
import docs6 from "../images/docs6.svg";
import docs7 from "../images/docs7.svg";
import docs from "../images/documentation.svg";
import support from "../images/support.svg";
import profServices from "../images/prof-service.svg";
import training from "../images/training.svg";
import tools from "../images/tools.svg";
import support1 from "../images/support-1.svg";
import support2 from "../images/support-2.svg";
import support3 from "../images/support-3.svg";
import profService1 from "../images/profService1.svg";
import profService2 from "../images/profService2.svg";
import profService3 from "../images/profService3.svg";
import profService4 from "../images/profService4.svg";

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from "reactstrap";

const Sidebar = (props) => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen("0");
        } else {
            setOpen(id);
        }
    };

    const border = {borderLeft: '4px solid #00539f'}

    return(
        <div className={props.className}>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <span className="sidebar-image-container">
                            <img src={docs} className="sidebar-image" />
                        </span>
                        <span>Documentation</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Link 
                            href="#" 
                            className="link d-flex"
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={globe}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Secure Private Access (ZPA)"
                            image={docs2}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={docs3}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={docs4}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Workload Segmentation (ZWS)"
                            image={docs5}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Zscaler Connectors"
                            image={docs6}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Data Protection"
                            image={docs7}
                            />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        <span className="sidebar-image-container">
                            <img src={support} className="sidebar-image" />
                        </span>
                        <span>Support</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <Link href="#" 
                            className="link d-flex align-items-center" 
                            text="Phone Support" 
                            image={support1} />
                        <Link href="#" 
                            className="link d-flex align-items-center" 
                            text="Login to See My Tickets"
                            image={support2} />
                        <Link href="#" 
                            className="link d-flex align-items-center" 
                            text="Submit Ticket"
                            image={support3} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        <span className="sidebar-image-container">
                            <img src={profServices} className="sidebar-image" />
                        </span>
                        <span>Professional Services</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <Link href="#" 
                            className="link d-flex align-content-center" 
                            text="Deployment Services"
                            image={profService1} />
                        <Link href="#" 
                            className="link d-flex align-content-center" 
                            text="Professional Services Credits"
                            image={profService2} />
                        <Link href="#" 
                            className="link d-flex align-content-center" 
                            text="Staff Augmentation"
                            image={profService3} />
                        <Link href="#" 
                            className="link d-flex align-content-center" 
                            text="Custom SOW"
                            image={profService4} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <Link href="#" className="accordion-header sidebar-link" 
                        text={
                            <>
                            <span className="sidebar-image-container"><img src={training} className="sidebar-image" /></span>
                            <span>Training & Certification</span>
                            </>
                        } />
                </AccordionItem>
                <AccordionItem>
                    <Link href="#" className="accordion-header sidebar-link" text={
                        <>
                        <span className="sidebar-image-container"><img src={tools} className="sidebar-image" /></span>
                        <span>Tools</span>
                        </>
                    } />
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Sidebar