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
            <div className="row px-3 px-xl-4 px-xl-5">
                <Logo image={logo} className="h-75" />
                <div className="col-12 col-xl-8 px-4 px-xl-0 d-xl-flex align-items-xl-center">
                    <NavLink className="col-12 col-xl-3 py-1">
                        <Dropdown name="Documentation">
                            <Link 
                                href="#" 
                                className="text-decoration-none link d-flex fw-light small py-1" 
                                text="Secure Internet and SaaS Access (ZIA)"
                                image={globe}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Secure Private Access (ZPA)"
                                image={spa}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Digital Experience Monitoring (ZDX)"
                                image={zdx}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Workload Segmentation (ZWS)"
                                image={zws}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Zscaler Connectors"
                                image={zconnectors}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Data Protection"
                                image={dataProtection}
                            />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Threat Protection"
                                image={threatProtection}
                            />
                        </Dropdown>
                    </NavLink>
                    <NavLink className="col-12 col-xl-2 py-1">
                        <Dropdown name="Support">
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Phone Support" image={support1} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Login to See My Tickets" image={support2} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Submit Ticket" image={support3} />
                        </Dropdown>
                    </NavLink>
                    <NavLink className="col-12 col-xl-3 py-1">
                        <Dropdown name="Professional Services">
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Deployment Services"
                                image={profService1} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Professional Services Credits"
                                image={profService2} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Staff Augmentation"
                                image={profService3} />
                            <Link 
                                href="#" 
                                className="text-decoration-none d-flex link fw-light small py-1" 
                                text="Custom SOW"
                                image={profService4} />
                        </Dropdown>
                    </NavLink>
                    <NavLink className="col-12 col-xl-3 ms-xl-2 py-1 blue-bottom-border">
                        <div>
                            <Link href="#" className="text-decoration-none text-dark w-100" text="Training & Certification" />
                        </div>
                    </NavLink>
                    <NavLink className="col-12 col-xl-1 py-1 blue-bottom-border">
                        <div>
                            <Link href="#" className="text-decoration-none text-dark w-100" text="Tools" />
                        </div>
                    </NavLink>
                </div>
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
}

export default Navbar