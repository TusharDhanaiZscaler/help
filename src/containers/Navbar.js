import React from "react";
import NavLink from "../components/NavLink";
import Logo from "../components/Logo";
import Link from "../components/Link";
import Dropdown from "./Dropdown";

// zscaler logo
import logo from '../images/zscaler-logo.png';

// dropdown links images
import globe from "../images/globe.svg";
import spa from "../images/docs2.svg";
import zdx from "../images/docs3.svg";
import zws from "../images/docs4.svg";
import zconnectors from "../images/docs5.svg";
import dataProtection from "../images/docs6.svg";
import threatProtection from "../images/docs7.svg";
import support1 from "../images/support-1.svg";
import support2 from "../images/support-2.svg";
import support3 from "../images/support-3.svg";
import profService1 from "../images/profService1.svg";
import profService2 from "../images/profService2.svg";
import profService3 from "../images/profService3.svg";
import profService4 from "../images/profService4.svg";

//icon
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-app">
                <Logo image={logo} className="logo" />
                <NavLink className="navbar-app-link">
                    <Dropdown name="Documentation">
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
                            image={spa}
                        />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Digital Experience Monitoring (ZDX)"
                            image={zdx}
                        />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Workload Segmentation (ZWS)"
                            image={zws}
                        />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Zscaler Connectors"
                            image={zconnectors}
                        />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Data Protection"
                            image={dataProtection}
                        />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Threat Protection"
                            image={threatProtection}
                        />
                    </Dropdown>
                </NavLink>
                <NavLink className="navbar-app-link">
                    <Dropdown name="Support">
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Phone Support" image={support1} />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Login to See My Tickets" image={support2} />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Submit Ticket" image={support3} />
                    </Dropdown>
                </NavLink>
                <NavLink className="navbar-app-link">
                    <Dropdown name="Professional Services">
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Deployment Services"
                            image={profService1} />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Professional Services Credits"
                            image={profService2} />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Staff Augmentation"
                            image={profService3} />
                        <Link 
                            href="#" 
                            className="link d-flex" 
                            text="Custom SOW"
                            image={profService4} />
                    </Dropdown>
                </NavLink>
                <NavLink className="navbar-app-link">
                    <Link href="#" className="link" text="Training & Certification" />
                </NavLink>
                <NavLink className="navbar-app-link">
                    <Link href="#" className="link" text="Tools" />
                </NavLink>
                <NavLink className="navbar-app-link">
                    <Dropdown 
                        name="EN"
                        icon={faGlobeAsia}
                    >
                        <Link href="#" className="link" text="English" />
                        <Link href="#" className="link" text="日本" />
                    </Dropdown>
                </NavLink>
            </div>
        )
    }
}

export default Navbar