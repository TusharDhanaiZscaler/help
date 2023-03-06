import React, { useState } from "react";

import Link from "../components/Link";

// sidebar link images from default export
import images from "../images";

// import accordion data
import sidebarLinksList from "../data/sidebar";

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from "reactstrap";

const renderAccordionItems = data => {
    return data.map( item => {
        if (item.children) {
            return (
                <AccordionItem key={item.id}>
                    <AccordionHeader targetId={item.id}>
                        <span className="accordion-icon-container">
                            <img src={images[item.image].default} className="accordion-icon" />
                        </span>
                        <span className="small text-dark">{item.title}</span>
                    </AccordionHeader>
                    <AccordionBody accordionId={item.id}>
                        { renderAccordionItems(item.children) }
                    </AccordionBody>
                </AccordionItem>
            )
        }

        if (item.id) {
            return (
                <AccordionItem key={item.id}>
                    <Link href="#" className="link text-dark text-decoration-none" text={
                        <div className="accordion-link" tabIndex={0}>
                        <span className="accordion-icon-container">
                            <img src={images[item.image].default} className="accordion-icon" />
                        </span>
                        <span className="small">{item.title}</span>
                        </div>
                    } />
                </AccordionItem>
            )
        }

        return (
            <Link 
                key={item.id}
                href="#" 
                className="link d-flex text-decoration-none small fw-light align-items-center py-1"
                text={item.title}
                image={images[item.image].default}
            />
        )
    })
}

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
                { renderAccordionItems(sidebarLinksList) }
            </Accordion>
        </div>
    )
}

export default Sidebar