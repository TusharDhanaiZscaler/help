import React, { useState } from "react";

import Link from "../components/Link";

// function to import multiple files
function importAll(r) {
	let images = {};
    // r.keys() returns an array of all possible requests
    r.keys().forEach( item => {
        // replace './' in the names of the images with '' and assign the item to the key created
        images[item.replace('./', '')] = r(item); 
    });
	return images
}

// context which contains an array of all files present in 'images' directory
const context = require.context('../images', false, /\.(png|jpe?g|svg)$/)
// dropdown links images
const images = importAll(context);

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
                            <img src={images["documentation.svg"].default} className="accordion-icon" />
                        </span>
                        <span className="small text-dark">Documentation</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
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
                        <span className="accordion-icon-container">
                            <img src={images['support.svg'].default} className="accordion-icon" />
                        </span>
                        <span className="small text-dark">Support</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
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
                        <span className="accordion-icon-container">
                            <img src={images['prof-service.svg'].default} className="accordion-icon" />
                        </span>
                        <span className="small text-dark">Professional Services</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
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
                            <div className="accordion-link" tabIndex={0}>
                                <span className="accordion-icon-container">
                                    <img src={images['training.svg'].default} className="accordion-icon" />
                                </span>
                                <span className="small">Training & Certification</span>
                            </div>
                        } />
                </AccordionItem>
                <AccordionItem>
                    <Link href="#" className="link text-dark text-decoration-none" text={
                        <div className="accordion-link" tabIndex={0}>
                        <span className="accordion-icon-container">
                            <img src={images['tools.svg'].default} className="accordion-icon" />
                        </span>
                        <span className="small">Tools</span>
                        </div>
                    } />
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Sidebar