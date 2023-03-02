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

    return(
        <div className={props.className}>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <span className="accordion-icon-container">
                            <img src={docs} className="accordion-icon" />
                        </span>
                        <span className="small text-dark">Documentation</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1"
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={globe}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Secure Private Access (ZPA)"
                            image={docs2}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={docs3}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={docs4}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Workload Segmentation (ZWS)"
                            image={docs5}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Zscaler Connectors"
                            image={docs6}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Data Protection"
                            image={docs7}
                            />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        <span className="accordion-icon-container">
                            <img src={support} className="accordion-icon" />
                        </span>
                        <span className="small text-dark">Support</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Phone Support" 
                            image={support1} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Login to See My Tickets"
                            image={support2} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Submit Ticket"
                            image={support3} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        <span className="accordion-icon-container">
                            <img src={profServices} className="accordion-icon" />
                        </span>
                        <span className="small text-dark">Professional Services</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Deployment Services"
                            image={profService1} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Professional Services Credits"
                            image={profService2} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Staff Augmentation"
                            image={profService3} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Custom SOW"
                            image={profService4} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <Link href="#" className="link text-dark text-decoration-none" 
                        text={
                            <div className="accordion-link">
                                <span className="accordion-icon-container"><img src={training} className="accordion-icon" /></span>
                                <span className="small">Training & Certification</span>
                            </div>
                        } />
                </AccordionItem>
                <AccordionItem>
                    <Link href="#" className="link text-dark text-decoration-none" text={
                        <div className="accordion-link">
                        <span className="accordion-icon-container"><img src={tools} className="accordion-icon" /></span>
                        <span className="small">Tools</span>
                        </div>
                    } />
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Sidebar