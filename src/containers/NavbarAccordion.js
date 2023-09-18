import React, { useState } from "react";

import Link from "../components/Link";
import NavLink from "../components/NavLink";
import Dropdown from "./Dropdown";

// sidebar link images from default export
import images, { logo } from "../images";

// fontawesome icons
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from "reactstrap";
import Logo from "../components/Logo";

const NavbarAccordion = (props) => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen("0");
        } else {
            setOpen(id);
        }
    };

    // handleMouseEnter = () => {
    //     setOpen()
    // }

    // handleMouseLeave = () => {
    //     this.setState({
    //         isVisible: false
    //     })
    // }

    return(
        <div className="row app-navbar">
            <Logo image={logo} className="h-75" />
            <Accordion open={open} toggle={toggle} className="d-xl-flex col-12 col-xl-8">
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <span className="small text-dark">Documentation</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="1" className="accordion-body-fixed">
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1"
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={images['globe.svg'].default}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Secure Private Access (ZPA)"
                            image={images['docs2.svg'].default}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={images['docs3.svg'].default}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Secure Internet and SaaS Access (ZIA)"
                            image={images['docs4.svg'].default}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Workload Segmentation (ZWS)"
                            image={images['docs5.svg'].default}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Zscaler Connectors"
                            image={images['docs6.svg'].default}
                            />
                        <Link 
                            href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Data Protection"
                            image={images['docs7.svg'].default}
                            />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        <span className="small text-dark">Support</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="2" className="accordion-body-fixed">
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Phone Support" 
                            image={images['support-1.svg'].default} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Login to See My Tickets"
                            image={images['support-2.svg'].default} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-items-center py-1" 
                            text="Submit Ticket"
                            image={images['support-3.svg'].default} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        <span className="small text-dark">Professional Services</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="3" className="accordion-body-fixed">
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Deployment Services"
                            image={images['profService1.svg'].default} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Professional Services Credits"
                            image={images['profService2.svg'].default} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Staff Augmentation"
                            image={images['profService3.svg'].default} />
                        <Link href="#" 
                            className="link d-flex text-decoration-none small fw-light align-content-center py-1" 
                            text="Custom SOW"
                            image={images['profService4.svg'].default} />
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <Link href="#" className="link text-dark text-decoration-none" 
                        text={
                            <div className="accordion-link blue-bottom-border" tabIndex={0}>
                                <span className="small">Training & Certification</span>
                            </div>
                        } />
                </AccordionItem>
                <AccordionItem>
                    <Link href="#" className="link text-dark text-decoration-none" text={
                        <div className="accordion-link blue-bottom-border" tabIndex={0}>
                        <span className="small">Tools</span>
                        </div>
                    } />
                </AccordionItem>
            </Accordion>
            <NavLink className="col-12 col-xl-1 px-4 d-xl-flex align-items-xl-center">
                <Dropdown 
                    name="EN"
                    icon={faGlobeAsia}
                >
                    <div className="">
                        <div>
                            <Link href="#" className="text-decoration-none small fw-light link ps-2" text="English" />
                        </div>
                        <div>
                            <Link href="#" className="text-decoration-none small fw-light link ps-2" text="日本" />
                        </div>
                    </div>
                </Dropdown>
            </NavLink>
        </div>
    )
}

export default NavbarAccordion